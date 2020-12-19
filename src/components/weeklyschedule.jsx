import React from "react";

// Components
import { ContentModal } from "./schedule-components/content-modal.jsx";
import { QuickLink, QuickLinkDisabled } from "./quick-links.jsx";
import { 
    getCurrentWeek, 
    getContentNumbers,
    getContentSource
} from "./schedule-components/schedule-utils.jsx";

import {
    ContentItem,
    SpecialContentItem,
    ContentItemLink
} from "./schedule-components/content-item.jsx"

// Course Data Import
import content_structure from "../course-data/curriculum/content-structure.json";
import special_events from "../course-data/curriculum/special-events.json";
import ui_colors from "../course-data/ui-config/ui-colors.config.json";
import content_item_config from "../course-data/ui-config/content-item.config.json";

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/sassets/schedule.scss";

/*
    Contains the weekly schedule component + logic
*/

let content_label_colors = ui_colors["weekly-schedule"];

function currentWeekContent() {
    let currentWeek = getCurrentWeek();
    let weekContent = createWeekContent(currentWeek)
    return (
        <div className="week-content">
            <h5>
                Week {currentWeek}
            </h5>
            {weekContent}
        </div>
    ); 
}

export function createWeekContent(currentWeek) {
    let weekContent = content_structure[currentWeek];
    let contentTypeKeys = Object.keys(weekContent);
    let contentLinks = [];

    for (let i = 0; i < contentTypeKeys.length; i++) {
        let contentType = contentTypeKeys[i];
        let contentKeys = weekContent[contentType];
        let layoutConfig = content_item_config[contentType];
        let contentSource = getContentSource(contentType);

        for (let o = 0; o < contentKeys.length; o++) {
            let contentKey = contentKeys[o]
            let contentData = contentSource[contentKey];
            if (contentData === undefined) {
                contentData = special_events[contentKey];
                if (contentData === undefined) {
                    continue;
                }
                contentLinks.push(<div className="divider" />);
                contentLinks.push(SpecialContentItem(contentData))
            } else {
                contentLinks.push(<div className="divider" />);
                contentLinks.push(
                    createContentItem(contentType, contentKey, contentData, layoutConfig)
                )
            }
        }
    }
    return contentLinks;
}

// Content Item methods and helpers.
function createContentItem(contentType, contentKey, contentData, layoutConfig) {
    // Set up
    let label = layoutConfig["label"]
    let contentNumber = getContentNumbers(contentType)[contentKey];

    let header = contentData["title"];
    let subheader = label + " " + contentNumber
    let contentLinks = createContentLinks(layoutConfig, contentData);
    let contentColor = content_label_colors[contentType];
    let modal = createContentModal(header, subheader, contentColor, layoutConfig, contentData)
    return ContentItem(header, subheader, contentColor, contentLinks, modal)
}

function createContentLinks(layoutConfig, contentData) {
    let contentLinks = [];
    let displayedLinks = layoutConfig["displayed-links"];
    for (let i = 0; i < displayedLinks.length; i++) {
        let key = displayedLinks[i];
        let link = contentData[key];
        if (link === undefined) {
            continue;
        }
        let layoutData = layoutConfig["core-links"][key];
        contentLinks.push(ContentItemLink(layoutData["label"], link, layoutData["icon"]));
    }
    return contentLinks;
}

// Content Modal methods and helpers.
function createContentModal(header, subheader, contentColor, layoutConfig, contentData) {
    /*
        Uses a configuration from contentConfig and a value
        from one of the content data sources (e.g. disc_data)
    */
   let body = createContentModalBody(layoutConfig, contentData);
   return <ContentModal header={header} subheader={subheader} modalContent={body} contentColor={contentColor}/>
   
}

function createContentModalBody(layoutConfig, contentData) {
    let quickLinks = createQuickLinks(contentData, layoutConfig["core-links"]);
    let extraLinks = createExtraLinks(contentData, layoutConfig["extra-links"])
    let staticContent = createStaticContent(contentData, layoutConfig["static-contents"]);
    return (
        <>
            {quickLinks}
            {staticContent}
            {extraLinks}
        </>
    )
}

function createQuickLinks(contentData, coreLinks) {
    let keys = Object.keys(coreLinks);
    let quickLinks = [];
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let link = contentData[key];
        // If there's no link then we assume that it's unwanted in the modal.
        if (link === undefined) {
            continue;
        }

        let link_config = coreLinks[key];
        let icon = link_config["icon"];
        let label = link_config["label"];
        if (link === null) {
            // Add a disabled QuickLink
            quickLinks.push(new QuickLinkDisabled(icon, label));
        }
        else {
            quickLinks.push(new QuickLink(icon, label, link));
        }
    }
    return (
        <div className="quick-link-bar">
            {quickLinks}
        </div>
    );
}

function createExtraLinks(contentData, extraLinksData) {
    let extraLinkSections = [];
    for (let i = 0; i < extraLinksData.length; i++) {
        let extraLinkData = extraLinksData[i];
        let label = extraLinkData["label"];
        let datakey = extraLinkData["key"];
        let links = contentData[datakey];

        if (links.length !== 0) {
            extraLinkSections.push(
                createExtraLinksSection(links, label)
            )
        }
    }
    return extraLinkSections
    
}

function createExtraLinksSection(links, label) {
    let anchors = [];
    for (let i = 0; i < links.length; i++) {
        let link = links[i];
        anchors.push(
            <a href={link.link} target="_blank" rel="noreferrer">
                {link.title}
            </a>
        )
    }
    return (
        <div className="modal-section">
            <h4>
                {label}
            </h4>
            <div className="extra-links">
                {anchors}
            </div>
        </div>
    )
}

function createStaticContent(contentData, staticContentsData) {
    let staticContent = [];
    for (let i = 0 ; i < staticContentsData.length; i++) {
        let staticContentData = staticContentsData[i];
        let key = staticContentData.key
        let text = contentData[key];
        if (text.length !== 0) {
            let format = staticContentData.format
            staticContent.push(
                <div className="modal-section static-content">
                    <h4>
                        {staticContentData.label}
                    </h4>
                    {createStaticContentSection(text, format)}
                </div>
            )
        }
    }
    return(
        <div>
            {staticContent}
        </div>
    )
}

function createStaticContentSection(texts, format) {
    let content = [];
    if (format === "p") {
        texts.forEach(text => content.push(
            <p>
                {text}
            </p>
        ))
    }
    if (format === "ul") {
        content.push(renderUnorderedList(texts));
    }
    if (format === "ol") {
        content.push(renderOrderedList(texts));
    }
    return (
        <div>
            {content}
        </div>
    )
}

function renderUnorderedList(listContents) {
    let listBody = [];
    for (let i = 0; i < listContents.length; i++) {
        let content = listContents[i];
        if (Array.isArray(content)) {
            listBody.push(
                renderUnorderedList(content)
            )
        } else {
            listBody.push(
                <li>
                    {content}
                </li>
            );
        }
    }
    return (
        <ul>
            {listBody}
        </ul>
    )
}

function renderOrderedList(listContents) {
    let listBody = [];
    for (let i = 0; i < listContents.length; i++) {
        let content = listContents[i];
        if (Array.isArray(content)) {
            listBody.push(
                renderOrderedList(content)
            )
        } else {
            listBody.push(
                <li>
                    {content}
                </li>
            );
        }
    }
    return (
        <ol>
            {listBody}
        </ol>
    )
}

export default currentWeekContent;