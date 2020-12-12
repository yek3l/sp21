import React from "react";
import NavigationBar from "../components/navigation.jsx"
import { Helmet } from 'react-helmet';

class ResourcesPage extends React.Component {

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
                </div>
            </div>
        );
    }
}

export default ResourcesPage;