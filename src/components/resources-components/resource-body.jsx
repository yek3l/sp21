import React from 'react';
import { QuickLink, QuickLinkButton } from '../quick-links';
import "../../styles/sassets/resource-components.scss";

/*
    Main display for the resource section.
*/

export function ResourceCategory(id, header, sections) {
    return (
        <div className="resource-category">
            <h2 id={id}>
                {header}
            </h2>
            <div className="sections">
                {sections}
            </div>
        </div>
    )
}

export function ResourceSection(header, cells) {
    return (
        <div className="resource-section">
            <h3>
                {header}
            </h3>
            <div className="cells">
                {cells}
            </div>
        </div>
    )
}

/*
    Dynamic Content Component
*/

export class DynamicContentComponent extends React.Component {
    
    render() {
        if (this.props.resourceType === "doc") {
            return <GoogleDocsDisplay name={this.props.name} link={this.props.link} goBack={this.props.goBack}/>
        }
        if (this.props.resourceType === "textbook") {
            return <TextbookDisplay name={this.props.name} link={this.props.link} goBack={this.props.goBack}/>
        }
        return (
            <div>
                No resource loaded.
                {this.props.resourceType}
            </div>
        );
    }

}

/*
    Google Docs Display
*/

class GoogleDocsDisplay extends React.Component {

    render() {
        return (
            <div className="google-docs-display">
                <div className="top-bar">
                    { QuickLinkButton("arrow_back_ios", "Resources", this.props.goBack)}
                    <h2>
                        {this.props.name}
                    </h2>
                    { QuickLink("article", "View in Docs", this.props.link)}
                </div>
                <div className="doc-view">
                    <iframe src={this.props.link} style={{width: "70vw", height: "100%", margin: "auto", display:"block"}}/>
                </div>
            </div>
        )
    }
}

class TextbookDisplay extends React.Component {

    render() {
        return (
            <div className="textbook-display">
                <h2>
                    {this.props.name}
                </h2>
                <iframe frameborder="0" width="700" height="935" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
                    src={this.props.link}>
                </iframe>
            </div>
        )
    }

}