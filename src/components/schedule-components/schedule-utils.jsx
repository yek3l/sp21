import "../../styles/sassets/schedule.scss";

// Course Data Import
import content_structure from "../../../static/course-data/curriculum/content-structure.yaml";
import general_config from "../../../static/course-data/general.config.yaml";


export function getContentSource(contentTypeKey, dict) {
    if (dict) {
        return dict[contentTypeKey];
    }
    return {};
}

export function getContentNumbers(contentType, dict) {
    
    let weeks = Object.keys(content_structure).length;
    let content_numbering = {}
    var count = 1;
    for (let week = 1; week <= weeks; week++) {
        let week_content = content_structure[week][contentType]
        let source_content = getContentSource(contentType, dict)
        for (let i = 0; i < week_content.length; i++) {
            let content = week_content[i];
            let exists = source_content[content]
            if (exists !== undefined && content_numbering[content] === undefined) {
                
                content_numbering[content] = count;
                count += 1;
            }
        }
    }

    return content_numbering;
}

// General Utilities
function getSundayOfDate(date) {
    let d = new Date(date);
    let diff = d.getDate() - d.getDay();
    return new Date(d.setDate(diff));
}

export function getCurrentWeek() {
    let today = new Date();
    let current_sunday = getSundayOfDate(today);
    let start_sunday = getSundayOfDate(general_config["semester-start-date"]);
    let max_weeks_available = Object.keys(content_structure).length;

    // date differences are returned in milliseconds. Divisor converts to days
    let divisor = 1000 * 60 * 60 * 24;
    let difference = (current_sunday - start_sunday) / divisor;
    return Math.min(Math.floor(difference / 7), max_weeks_available);
}

export class Link {

    constructor(title, dest, icon) {
        this.title = title;
        this.dest = dest;
        this.icon = icon;
    }
}
