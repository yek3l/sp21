import React from "react";

// Styles
import "../styles/main.scss"
import "../styles/sassets/dashboard.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavigationBar from "../components/navigation.jsx";
import { renderQuickLinks } from "../components/quick-links.jsx";
import { Helmet } from 'react-helmet';
import currentWeekContent from "../components/weeklyschedule.jsx";
import CourseCalendar from "../components/schedule-components/calendar.jsx";
import { getContentTypes, getContentSource } from "../course-data/course-data-util";
global.XMLHttpRequest = require('xhr2');

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      course_data : {}
    }

    this.testGetContentSource = this.testGetContentSource.bind(this);
    this.finishedLoadingData = this.finishedLoadingData.bind(this);
  }

  componentDidMount() {
    let contentTypes = getContentTypes();
    for (let i = 0; i < contentTypes.length; i++) {
      const contentType = contentTypes[i];
      let course_data = this.state.course_data;
      getContentSource(contentType)
        .then(json => this.setAndReturn(course_data, contentType, json))
        .then(dict => this.setState({
          course_data : dict
        }))
    }
  }

  setAndReturn(dict, key, value) {
    dict[key] = value;
    return dict;
  }

  testGetContentSource() {
    console.log(this.state);
  }

  finishedLoadingData() {
    return Object.keys(this.state.course_data).length === getContentTypes().length;
  }

  loadHomeScreen() {
    if (this.finishedLoadingData()) {
      return (
        <div>
            <div className="container-fluid">
              <h1>
                Dashboard
              </h1>
              { renderQuickLinks() }
              <div className="content-body">
                { currentWeekContent(this.state.course_data) }
                { <CourseCalendar /> }
              </div>
            </div>
        </div>
      )
    }
    return (
      <div>
        Loading ;_;
      </div>
    )
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          />
        </Helmet>
        <NavigationBar />
        { this.loadHomeScreen() }
      </div>
    )
  }
}

export default Home;