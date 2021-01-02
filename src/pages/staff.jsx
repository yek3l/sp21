import React from "react";
import NavigationBar from "../components/navigation.jsx"
import { Helmet } from 'react-helmet';
import { StaffCard, getStaffCard } from "../components/staff-components/staff-elements.jsx";
import staff_ui_config from "../course-data/ui-config/staff-ui.config.json";
import "../styles/sassets/staff-page.scss";

class StaffPage extends React.Component {

    constructor(props) {
        super(props);
    }

    renderStaff() {
        let roles = staff_ui_config["roles"];
        let cards = roles.map(role => {
            let label = role["label"];
            let people = role["people"]
            return people.map(key => getStaffCard(label, key))
        })
        return cards.flat();
    }

    render() {
        return (
            <div>
                <Helmet>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
                  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
                </Helmet>
                <NavigationBar />
                <div className="container-fluid">
                    <h1>
                        Staff
                    </h1>
                    <div className="staff-section">
                        {/* <StaffCard staffKey="yolanda" role="Head TA" />
                        <StaffCard staffKey="shannon" role="Head TA" /> */}
                        { this.renderStaff() }
                    </div>
                    {/* 
                    Here lies the button of great science. The real MVP 2020-2021.
                    <button>
                        Boop me for GREAT SCIENCE!
                    </button> 
                    */}
                </div>
            </div>
        );
    }
}

export default StaffPage;