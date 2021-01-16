import React from 'react';
import { Link } from "gatsby";
import "../styles/main.scss";
import "../styles/sassets/navigation-bar.scss";
import navbar_config from "../ui-config/navbar.config.yaml";
import { Navbar, Nav } from "react-bootstrap";

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar className="bg-blue" variant="dark" expand="lg">
                <Link className="navbar-brand" to="/">
                    CS10: The Beauty and Joy of Computing
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {getNavbarLinks()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
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
        <ul className="navbar-nav mr-auto">
            {links}
        </ul>
    )
}

export default NavigationBar