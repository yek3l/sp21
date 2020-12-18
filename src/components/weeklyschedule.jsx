import React from "react";

// Components
import { ContentModal } from "./schedule-components/content-modal.jsx";
import { QuickLink, QuickLinkDisabled } from "./quick-links.jsx";
import { 
    getCurrentWeek, 
    getContentNumbers
} from "./schedule-components/schedule-utils.jsx";

import {
    ContentItem,
    SpecialContentItem,
    ContentItemLink
} from "./schedule-components/content-item.jsx"

// Course Data Import
import content_structure from "../course-data/curriculum/content-structure.json";
import general_config from "../course-data/general.config.json";
import lecture_data from "../course-data/curriculum/lecture-data.json";
import lab_data from "../course-data/curriculum/lab-data.json";
import disc_data from "../course-data/curriculum/discussion-data.json";
import proj_data from "../course-data/curriculum/projects-data.json";
import readings_data from "../course-data/curriculum/readings-data.json";
import ui_colors from "../course-data/ui-config/ui-colors.config.json";
import content_item_config from "../course-data/ui-config/content-item.config.json";

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/sassets/schedule.scss";

/*
    Contains the weekly schedule component + logic
*/

let content_label_colors = ui_colors["weekly-schedule"];

function WeekContent() {
    let currentWeek = 7;
    return (
        <div className="week-content">
            <h5>
                Week {currentWeek}
            </h5>
        </div>
    ); 
}

function createContentModal(layoutConfig, contentType, contentKey, contentData) {
    /*
        Uses a configuration from contentConfig and a value
        from one of the content data sources (e.g. disc_data)
    */
   let header = contentData["title"];
   let label = layoutConfig["label"]
   let contentNumber = getContentNumbers(contentType)[contentKey];
   let subheader = label + " " + contentNumber
   let body = createContentModalBody(layoutConfig, contentData);
   
   return <ContentModal header={header} subheader={subheader} modalContent={body}/>
   
}

function createContentModalBody(layoutConfig, contentData) {
    let quickLinks = createQuickLinks(contentData. layoutConfig["core-links"]);
    let extraLinks = createExtraLinks(contentData, layoutConfig["extra-links"])
    let staticContent = createStaticContent(contentData, layoutConfig["static-content"]);
    return (
        <>
            {quickLinks}
            {extraLinks}
            {staticContent}
        </>
    )
}

function createQuickLinks(contentData, coreLinks) {
    let keys = Object.keys(coreLinks);
    let quickLinks = [];
    for (let i = 0; i < keys.length; i++) {
        let key = coreLinks[i];
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
    return quickLinks;
}

function createExtraLinks(contentData, extraLinksData) {
    let extraLinkSections = [];
    for (let i = 0; i < extraLinksData.length; i++) {
        let extraLinkData = extraLinksData[i];
        let label = extraLinkData["label"];
        let datakey = extraLinkData["key"];
        let links = contentData[datakey];
    
        extraLinkSections.append(
            createExtraLinksSection(links, label)
        )
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
        <div>
            <h4>
                {label}
            </h4>
            <div>
                {anchors}
            </div>
        </div>
    )
}

function createStaticContent(contentData, staticContentsData) {
    let staticContent = [];
    for (let i = 0 ; i < staticContentsData; i++) {
        let staticContentData = staticContentsData[i];
        let key = staticContentData.key
        let text = contentData[key];
        let format = staticContentData.format
        staticContent.push(
            <div>
                <h4>
                    {staticContentData.label}
                </h4>
                {createStaticContentSection(text, format)}
            </div>
        )
    }
    return(
        <div>
            {staticContent}
        </div>
    )
}

function createStaticContentSection(text, format) {
    let content = [];
    if (format == "p") {
        text.forEach(text => content.push(
            <p>
                {text}
            </p>
        ))
    }
    if (format == "ul") {
        text.forEach(arr => content.push(
            renderUnorderedList(arr)
        ))
    }
    if (format == "ol") {
        text.forEach(arr => content.push(
            renderOrderedList(arr)
        ))
    }
    return (
        <div>
            {content}
        </div>
    )
}

function renderUnorderedList(listContents) {
    let listBody = [];
    for (let i = 0; i < listContents; i++) {
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
    for (let i = 0; i < listContents; i++) {
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

// Data Grabbers

function getContentConfiguration(contentType) {
    return content_item_config[contentType];
}

function getWeekContentData(weekNumber, contentType) {
    const contentKeys = content_structure[weekNumber][contentType]
    const dataSource = {
        "lecture" : lecture_data,
        "discussion" : disc_data,
        "lab" : lab_data,
        "project" : proj_data,
        "readings" : readings_data
    }[contentType];
    let contentData = [];
    contentKeys.forEach(key => contentData.push(
        dataSource[key]
    ))
    
    return contentData;
}

export default WeekContent;