import React from 'react';
import "../styles/sassets/quick-links.scss"
import quick_link_config from "../course-data/quick-links-config.json"

/*
    All relevant components for the Quick-links on the dashboard.
*/

export function QuickLink(icon, label, link) {
    return (
        <a href={link} className="quick-link-anchor" target="_blank" rel="noreferrer">
            <div className="quick-link">
                <span className="material-icons">
                    {icon}
                </span>
                <div className="quick-link-label">
                    {label}
                </div>
            </div>
        </a>
    );
}