import React from "react";
import NavigationBar from "../components/navigation.jsx"
import { Helmet } from 'react-helmet';
import "../styles/sassets/resources.scss"

class ResourcesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            offset : false,
            depth : 0
        }
        this.toggleOffset = this.toggleOffset.bind(this);
    }

    toggleOffset() {
        this.setState({
            offset : (!this.state.offset)
        })
    }

    render() {
        return (
            <div>
                <Helmet>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
                </Helmet>
                <NavigationBar />
                <div className="container-fluid">
                    <h1>
                        Resources
                    </h1>
                    <div className="test-container">
                        <ResourceOverview />
                        <div className="horizontal-scroll-view">
                            <h2>
                                Hello
                            </h2>
                        </div>
                    </div>
                    <button onClick={this.toggleOffset}>
                        Offset Test
                    </button>
                </div>
            </div>
        );
    }
}

class ResourceOverview extends React.Component {
    /*
        The initial view for the resources page. Allows for access to all available content.
    */

    render() {
        return (
            <div id="resource-overview" className="horizontal-scroll-view">
                <h2>
                    All Available Resources here.
                </h2>
            </div>
        )
    }

}

export default ResourcesPage;