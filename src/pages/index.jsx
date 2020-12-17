import React from "react";

// Styles
import "../styles/main.scss"
import "../styles/sassets/dashboard.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavigationBar from "../components/navigation.jsx";
import { renderQuickLinks } from "../components/quick-links.jsx";
import { Helmet } from 'react-helmet';
import WeekContent from "../components/schedule-components/weeklyschedule.jsx";
import CourseCalendar from "../components/schedule-components/calendar.jsx";

class Home extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          />
        </Helmet>
        <div>
            <NavigationBar />
            <div className="container-fluid">
              <h1>
                Dashboard
              </h1>
              { renderQuickLinks() }
              <div className="content-body">
                {WeekContent()}
                {<CourseCalendar />}
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Home;