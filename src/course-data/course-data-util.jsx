import content_structure from "./curriculum/content-structure.json";
import content_item_config from "./ui-config/content-item.config.json";
import { withPrefix } from "gatsby";
const fetch = require('node-fetch');
const yaml = require('js-yaml')

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
    return loadJSON(dataPath);
}

export async function getStaffBio(staffMember) {
    let bioPath = withPrefix(`/course-data/staff/${staffMember}/bio.yaml`)
    let bio = await loadYamlFile(bioPath);
    return bio
}
    
async function loadJSON(path) {
    let fetchedData = await fetch(path);
    let sourceJson = await fetchedData.json();
    return sourceJson
}

async function loadYamlFile(path) {
    let result = await fetch(path);
    let blob = await result.blob();
    let text = await blob.text()
    let yamlFile = yaml.safeLoad(text);
    return yamlFile
}