import content_structure from "./curriculum/content-structure.json";
import content_item_config from "./ui-config/content-item.config.json";
import { withPrefix } from "gatsby";

export function getContentTypes() {
    return Object.keys(content_item_config);
}

export function getContentStructure() {
    return content_structure;
}

export async function getContentSource(contentType) {
    /*
        Used to retrieve json containing all data for
        a specific set of content (i.e. all discussions
        or lectures).
        */
    let dataPath = withPrefix(`/course-data/curriculum/${contentType}-data.json`);
    let fetchedData = await fetch(dataPath);
    let sourceJson = await fetchedData.json();
    return sourceJson;
}