import React from "react";
import NavigationBar from "../components/navigation.jsx"
import { Helmet } from 'react-helmet';
import { StaffCard, RoleSection } from "../components/staff-components/staff-elements.jsx";
import staff_roles from "../course-data/ui-config/staff-ui.config.json";

class StaffPage extends React.Component {

    constructor(props) {
        super(props);
        this.staffMembers = this.staffMembers.bind(this);
    }

    staffMembers() {
        let staff = staff_roles.map(role => role["people"]).flat()
        console.log(staff);
    }

    renderStaffRoles() {
        let roles = staff_roles.map(role => RoleSection(role["label"], []))
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
                    <StaffCard staffKey="yolanda" role="Head TA"></StaffCard>
                    <button>
                        Boop me for GREAT SCIENCE!
                    </button>
                </div>
            </div>
        );
    }
}

export default StaffPage;