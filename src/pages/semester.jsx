import React from "react";
import NavigationBar from "../components/navigation.jsx"
import { Head } from "../components/head.jsx";
import { createWeekContent } from "../components/weeklyschedule.jsx";
import { getContentTypes, getContentSource } from "../components/course-data-util";
import "../styles/main.scss"
import "../styles/sassets/semester-calendar.scss"

class SemesterPage extends React.Component {

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
            let allWeekContent = [];

            for (let week = 1; week <= 15; week++) {
                allWeekContent.push(
                    <div className="week-content col-5" style={{marginTop: "40px"}}>
                        <h5>
                            Week {week}
                        </h5>
                        {createWeekContent(week, this.state.course_data)}
                    </div>
                )
            }
                
            return (
                <div className="container-fluid">
                    <h1>
                        Semester Calendar
                    </h1>
                    <div class="semester-calendar-body">
                        { allWeekContent }
                    </div>
                </div>
            )
        }
        return (
            <div>
            Loading...
            </div>
        )
    }

    render() {
        return (
            <div>
                <Head />
                <NavigationBar />
                { this.loadHomeScreen() }
            </div>
        );
    }
}

export default SemesterPage;