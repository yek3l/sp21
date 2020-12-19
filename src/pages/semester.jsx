import React from "react";
import NavigationBar from "../components/navigation.jsx"
import { Helmet } from 'react-helmet';
import { createWeekContent } from "../components/weeklyschedule.jsx";
import "../styles/main.scss"
import "../styles/sassets/semester-calendar.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

class SemesterPage extends React.Component {

    render() {
        let allWeekContent = [];

        for (let week = 1; week <= 15; week++) {
            allWeekContent.push(
                <div className="week-content col-5" style={{marginTop: "40px"}}>
                    <h5>
                        Week {week}
                    </h5>
                    {createWeekContent(week)}
                </div>
            )
        }

        return (
            <div>
                <Helmet>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                  <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous"
                />
                </Helmet>
                <NavigationBar />
                <div className="container-fluid">
                    <h1>
                        Semester Calendar
                    </h1>
                    <div class="semester-calendar-body container-fluid">
                        {allWeekContent}
                    </div>
                </div>
            </div>
        );
    }
}

export default SemesterPage;