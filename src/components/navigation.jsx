import React from 'react';
import { Link } from "gatsby";
import "../styles/main.scss";

class NavigationBar extends React.Component {

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        CS10: The Beauty and Joy of Computing
                    </Link>
                </div>
            </div>
        )
    }
}

export default NavigationBar