import React from "react";

// Styles
import "../styles/main.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavigationBar from "../components/navigation.jsx";
import { renderQuickLinks } from "../components/quick-links.jsx";
import { Helmet } from 'react-helmet';
import WeekContent from "../components/schedule-components/weeklyschedule.jsx";

class Home extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          
        </Helmet>
        <div>
            <NavigationBar />
            <div className="container-fluid">
              <h1>
                Dashboard
              </h1>
              { renderQuickLinks() }
              { WeekContent(1) }
            </div>
        </div>
      </div>
    )
  }
}

export default Home;