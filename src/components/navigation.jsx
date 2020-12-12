import React from 'react';
import { Link } from "gatsby";
import "../styles/main.scss";
import navbar_config from "../course-data/navbar-config.json";

class NavigationBar extends React.Component {

    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        CS10: The Beauty and Joy of Computing
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                        {getNavbarLinks()}
                    </div>
                </div>
            </div>
        );
    }
}

function getLink(navlink) {
    if (navlink.path.slice(0,1) === "/") {
        return (
            <li className="nav-item">
                <Link className="nav-link" to={navlink.path}>
                    {navlink.label}
                </Link>
            </li>
        );
    }
    if (navlink.path.slice(0,4) === "http") {
        return (
            <li className="nav-item">
                <a className="nav-link" target="_blank" rel="noreferrer" href={navlink.path}>
                    {navlink.label}
                </a>
            </li>
        );
    }
}

function getNavbarLinks() {
    let links = [];
    navbar_config.forEach(navlink => links.push(getLink(navlink)))
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links}
        </ul>
    )
}

export default NavigationBar