import React from 'react';
import "../../styles/sassets/resource-components.scss";
import { QuickLinkInternal } from "../quick-links.jsx";

let resourceNavAttributes = [
    {
        label: "Snap!",
        icon: "code",
        link: "#snap"
    },
    {
        label: "Python!",
        icon: "code",
        link: "#python"
    },
    {
        label: "Exams and Projects",
        icon: "create",
        link: "#exams+projects"
    }
]

export class ResourceNavigation extends React.Component {

    render() {
        let links = resourceNavAttributes.map(resource => QuickLinkInternal(resource.icon, resource.label, resource.link))
        return (
            <div className="resources-nav">
                {links}
            </div>
        )
    }
}