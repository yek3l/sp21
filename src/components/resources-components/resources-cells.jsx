import React from 'react';
import "../../styles/sassets/resource-components.scss";

export function ResourceCell(link, onClick, icon, label) {
    return (
        <a href={link} onClick={onClick} target="_blank" rel="noreferrer noopener">
            <div className="resource-cell">
                <div className="resource-cell-content">
                    <span className="material-icons">
                        {icon}
                    </span>
                    <div className="resource-cell-label">
                        {label}
                    </div>
                </div>
            </div>
        </a>
    )
}

export function ResourceCellInternal(link, onClick, icon, label) {
    return (
        <a href={link} onClick={onClick}>
            <div className="resource-cell">
                <div className="resource-cell-content">
                    <span className="material-icons">
                        {icon}
                    </span>
                    <div className="resource-cell-label">
                        {label}
                    </div>
                </div>
            </div>
        </a>
    )
}