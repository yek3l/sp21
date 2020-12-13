import React from "react";
import { ContentItem, SpecialContentItem } from "./schedule.jsx";
import general_config from "../../course-data/general-config.json";
import content_structure from "../../course-data/curriculum/content-structure.json";
import lecture_data from "../../course-data/curriculum/lecture-data.json";
import lab_data from "../../course-data/curriculum/lab-data.json";
import disc_data from "../../course-data/curriculum/discussion-data.json";
import special_events from "../../course-data/curriculum/special-events.json";
import "../../styles/sassets/schedule.scss";

/*
    Contains the weekly schedule component + logic
*/

function WeekContent(currentWeek) {
    let week = getCurrentWeek();
    currentWeek = week;
    return (
        <div className="col-6">
            { WeekLectureContent(currentWeek) }
            { WeekLabContent(currentWeek) }
            { WeekDiscContent(currentWeek) }
        </div>
    );  
}

// Week Section Component
function WeekContentSection(header, contentItems) {
    return (
        <div className="week-content-section">
            <h1>
                {header}
            </h1>
            <div className="content-items">
                {contentItems}
            </div>
        </div>
    );
}

function WeekLectureContent(currentWeek) {
    let contentItems = getContentItems(currentWeek, "lectures")
    return WeekContentSection("Lecture", contentItems);
}

function WeekLabContent(currentWeek) {
    let contentItems = getContentItems(currentWeek, "labs")
    return WeekContentSection("Lab", contentItems);
}

function WeekDiscContent(currentWeek) {
    let contentItems = getContentItems(currentWeek, "discussion")
    return WeekContentSection("Discussion", contentItems);
}



// Data -> Content Items

/*
    This function does the heavy lifting of accessing the curriculum data.
    Will search the contentKey by default, and fallback on special-event
    in case it can't find the
*/
function getContentItems(currentWeek, contentKey) {
    let content_mapping = {
        "lectures" : lecture_data,
        "labs" : lab_data,
        "discussion" : disc_data
    }
    let contentItems = [];

    let keys = content_structure[currentWeek][contentKey];
    let content_source = content_mapping[contentKey]
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        var contentData = content_source[key];
        if (contentData !== undefined) {
            if (contentKey === "lectures") {
                contentItems.push(lectureDataToContentItem(contentData, 1 + i));
            }
            if (contentKey === "labs") {
                contentItems.push(labDataToContentItem(contentData, 1 + i));
            }
            if (contentKey === "discussion") {
                contentItems.push(discDataToContentItem(contentData, 1 + i));
            }
        } else {
            contentData = special_events[key]
            contentItems.push(SpecialContentItem(contentData))
        }
    }

    return contentItems;
}

/* 
    Converts a single content value (i.e one value in the lecture-data json)),
    into a ContentItem component.
    
    Inputs: 
        <content>Data: a value from lecture-data json
        contentCount: the count of the particular content (e.g. lecture 1)
*/
function lectureDataToContentItem(lectureData, contentCount) {
    let icon_1 = new Link("webcast", lectureData["webcast"], "videocam");
    let icon_2 = new Link("webcast slides", lectureData["webcast_slides"], "slideshow");
    let icon_3 = new Link("more resources", "https://cs10.org", "exit_to_app");
    return ContentItem(lectureData["title"], "Lecture " + contentCount, [icon_1, icon_2, icon_3]);
}

function labDataToContentItem(labData, contentCount) {
    let icon_1 = new Link("lab page", labData["link"], "computer");
    let icon_2 = new Link("checkoff form", labData["checkoff"], "check_box");
    let icon_3 = new Link("more resources", "https://cs10.org", "exit_to_app");
    return ContentItem(labData["title"], "Lab " + contentCount, [icon_1, icon_2, icon_3]);
}

function discDataToContentItem(discData, contentCount) {
    let icon_1 = new Link("worksheet", discData["link"], "create");
    let icon_2 = new Link("solutions", discData["checkoff"], "done_all");
    let icon_3 = new Link("more resources", "https://cs10.org", "exit_to_app");
    return ContentItem(discData["title"], "Discussion " + contentCount, [icon_1, icon_2, icon_3]);
}

// General Utilities
function getSundayOfDate(date) {
    let d = new Date(date);
    let diff = d.getDate() - d.getDay();
    return new Date(d.setDate(diff));
}

function getCurrentWeek() {
    let today = new Date();
    let current_sunday = getSundayOfDate(today);
    let start_sunday = getSundayOfDate(general_config["semester-start-date"])

    // date differences are returned in milliseconds. Divisor converts to days
    let divisor = 1000 * 60 * 60 * 24
    let difference = (current_sunday - start_sunday) / divisor
    return Math.floor(difference / 7);
}

function getContentNumber() {
    return 1;
}

class Link {

    constructor(title, dest, icon) {
        this.title = title;
        this.dest = dest;
        this.icon = icon;
    }

}

export default WeekContent;