import React from "react";
import { ContentItem } from "./schedule.jsx";
// import general_config from "../course-data/general-config.json";
import content_structure from "../../course-data/curriculum/content-structure.json";
import lecture_data from "../../course-data/curriculum/lecture-data.json";
import lab_data from "../../course-data/curriculum/lab-data.json";
import disc_data from "../../course-data/curriculum/discussion-data.json";
import "../../styles/sassets/schedule.scss";

/*
    Contains the weekly schedule component + logic
*/

function WeekContent(currentWeek) {
    return (
        <div>
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
    return WeekContentSection("Lecture", getLectureContentItems(currentWeek));
}

function WeekLabContent(currentWeek) {
    return WeekContentSection("Lab", getLabContentItems(currentWeek));
}

function WeekDiscContent(currentWeek) {
    return WeekContentSection("Discussion", getDiscussionContentItems(currentWeek));
}

// Content Item Rendering
function getLectureContentItems(currentWeek) {
    let weekLectureData = getContentData(currentWeek, "lectures");
    let contentItems = [];
    for (let i = 0; i < weekLectureData.length; i++) {
        // TODO: Add support for holidays/special events.
        let lectureData = weekLectureData[i];
        contentItems.push(lectureDataToContentItem(lectureData, 1));
    }
    return contentItems;
}

function getLabContentItems(currentWeek) {
    let weekLabData = getContentData(currentWeek, "labs");
    let contentItems = [];
    for (let i = 0; i < weekLabData.length; i++) {
        // TODO: Add support for holidays/special events.
        let labData = weekLabData[i];
        contentItems.push(labDataToContentItem(labData, 1));
    }
    return contentItems;
}

function getDiscussionContentItems(currentWeek) {
    let weekDiscData = getContentData(currentWeek, "discussion");
    let contentItems = [];
    for (let i = 0; i < weekDiscData.length; i++) {
        // TODO: Add support for holidays/special events.
        let discData = weekDiscData[i];
        contentItems.push(discDataToContentItem(discData, 1));
    }
    return contentItems;
}

// Data -> Content Items
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

// Data Grabbers
function getContentData(currentWeek, contentKey) {
    /*
        Returns an array containing the values from the requested
        contentKey json (i.e. lecture-data).
    */

   let content_mapping = {
        "lectures" : lecture_data,
        "labs" : lab_data,
        "discussion" : disc_data
    }

    let keys = content_structure[currentWeek][contentKey];
    let content_source = content_mapping[contentKey];
    let resources = [];
    keys.forEach(key => resources.push(content_source[key]));
    return resources;
}

// General Utilities
function getCurrentWeek() {
    return 1;
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