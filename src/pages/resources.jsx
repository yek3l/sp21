import React from "react";
import NavigationBar from "../components/navigation.jsx"
import { Helmet } from 'react-helmet';
import resources from "../../static/course-data/curriculum/resources.yaml";
import { ResourceCell, ResourceCellInternal } from "../components/resources-components/resources-cells.jsx";
import { ResourceNavigation } from "../components/resources-components/resource-nav.jsx";
import { DynamicContentComponent, ResourceSection, ResourceCategory } from "../components/resources-components/resource-body.jsx";
import "../styles/sassets/resources.scss"

class ResourcesPage extends React.Component {

    render() {
        return (
            <div>
                <Helmet>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                </Helmet>
                <NavigationBar />
                <ResourceOverview />
            </div>
        );
    }
}

class ResourceOverview extends React.Component {
    /*
        The initial view for the resources page. Allows for access to all available content.
    */

    constructor(props) {
        super(props);
        this.state = {
            videoResources : this.getVideoResources(),
            inChildView: false,
            childViewState: "",
            link: "",
            name: ""
        }
        this.transitionToDocView = this.transitionToDocView.bind(this);
        this.transitionToVideoView = this.transitionToVideoView.bind(this);
        this.toggleChildViewState = this.toggleChildViewState.bind(this);
    }

    render() {
        if (this.state.inChildView) {
            return (
                <div className="container-fluid">
                    <DynamicContentComponent 
                        resourceType={this.state.childViewState}
                        name={this.state.name} 
                        link={this.state.link}
                        goBack={this.toggleChildViewState}
                    />
                </div>
            )
        }
        return (
            <div className="container-fluid">
                <h2>
                    Resources
                </h2>
                <div className="resource-component">
                    <ResourceNavigation />
                    <div className="resource-body-container">
                        {this.renderResourceCategories()}
                    </div>
                </div>
            </div>
        )
    }

    toggleChildViewState() {
        this.setState({
            inChildView: (!this.state.inChildView)
        })
    }

    getVideoResources() {
        let videoResources = {};
        resources.forEach(category => {
            category.sections.forEach(topic => {
                topic.resources.forEach(resource => {
                    if (resource.type === "video") {
                        videoResources[resource.name] = {
                            extraLinks : resource["extra-links"],
                            annotations: resource.annotations
                        }
                    } 
                })
            })
        })
        return videoResources
    }

    addVideoResources(key, annotations, links) {
        let resources = this.state.videoResources;
        resources[key] = {
            links: links,
            annotations: annotations
        }

        this.setState({
            videoResources: resources
        })
    }

    // View Transition Methods.
    transitionToDocView(name, link, viewType) {
        this.setState({
            childViewState: viewType,
            link: link,
            inChildView: true,
            name: name
        })
    }

    transitionToVideoView(link) {
        return;
    }

    // Resource rendering methods.
    renderResourceCategories() {
        return resources.map(category => {
            let sections = category.sections.map(section => this.renderResourceSection(section))
            return ResourceCategory(category.id, category.name, sections)
        })
    }

    renderResourceSection(section) {
        let cells = section.resources.map(resource => this.renderResource(resource))
        return ResourceSection(section.header, cells)
    }

    renderResource(resource) {
        if (resource.type === "external") {
            return ResourceCell(resource.link, null, "http", resource.name)
        }
        if (resource.type === "doc") {
            return ResourceCell(resource.link, 
                () => {
                    // this.transitionToDocView(resource.name, resource.link, resource.type)
                },
                "article",
                resource.name
            )
        }
        if (resource.type === "textbook") {
            return ResourceCellInternal(resource.link, 
                () => {
                    // this.transitionToDocView(resource.name, resource.link, resource.type)
                },
                "article",
                resource.name
            )
        }
        if (resource.type === "video") {
            return ResourceCell(resource.link,
                () => {
                    // this.transitionToVideoView(resource.name, resource.link)
                },
                "play_arrow",
                resource.name
            )
        }
        return null
    }

}

export default ResourcesPage;