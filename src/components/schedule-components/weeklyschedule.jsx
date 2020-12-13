import React from "react";
import { ContentItem } from "./schedule.jsx";
// import general_config from "../course-data/general-config.json";
import content_structure from "../course-data/content-structure.json";
import lecture_data from "../course-data/lecture-data.json";

/*
    Contains the weekly schedule component + logic
*/

function WeekLectureContent(currentWeek) {
    return WeekContentSection("Lecture", getLectureContentItems(currentWeek));
}

function WeekContentSection(header, contentItems) {
    return (
        <div>
            <h1>
                {header}
            </h1>
            <div>
                {contentItems}
            </div>
        </div>
    );
}

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

function lectureDataToContentItem(lectureData, contentCount) {
    /* 
        Converts a single lecture item (i.e one value in the lecture-data json)),
        into a ContentItem component.
        
        Inputs: 
            lectureData: a value from lecture-data json
            contentCount: the count of the particular content (e.g. lecture 1)
    */
   let icon_1 = new Link("webcast", lectureData["webcast"], "videocam");
   let icon_2 = new Link("webcast slides", lectureData["webcast_slides"], "slideshow");
   let icon_3 = new Link("more resources", "https://cs10.org", "exit_to_app");
   return ContentItem(lectureData["title"], "Lecture " + contentCount, [icon_1, icon_2, icon_3]);
}

// Data Grabbers
function getContentData(currentWeek, contentKey) {
    /*
        Returns an array containing the values from the requested
        contentKey json (i.e. lecture-data).
    */

    let keys = content_structure[currentWeek][contentKey];
    let resources = [];
    keys.forEach(key => resources.push(lecture_data[key]));
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