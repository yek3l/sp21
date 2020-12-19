import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import "../../styles/sassets/schedule.scss";


export function ContentItem(
    header,
    subheader,
    contentColor,
    contentLinks,
    modal
) {
    return (
        <div className="content-item">
            <div className="content-header">
                <div className="label" style={{backgroundColor : contentColor}}>
                    {subheader}
                </div>
                <OverlayTrigger key="header" placement="top"
                    overlay={
                        <Tooltip id={"tooltip-" + header}>
                            {header}
                        </Tooltip>
                    }>
                    <div className="title">
                        {header}
                    </div>
                </OverlayTrigger>
            </div>
            <div className="links">
                {contentLinks}
                {modal}
            </div>
        </div>
    )
}

export function ContentItemLink(title, dest, icon) {

   if (dest === null || dest === undefined) {
        return (
            <span className="material-icons icon-link disabled">
                {icon}
            </span>
        );
   }
   return (
        <a className="icon-link" href={dest} target="_blank" rel="noreferrer">
            <OverlayTrigger key="header" placement="top"
                overlay={
                    <Tooltip id={"tooltip-" + title}>
                        {title}
                    </Tooltip>
                }>
                        <span className="material-icons">
                            {icon}
                        </span>
            </ OverlayTrigger>
        </a>
   );
}

export function SpecialContentItem(header) {
    /*
        Note: only the first 2 links will be displayed.
    */
    return (    
        <div className="content-item">
            <div className="content-header">
                <div className="label" style={{backgroundColor : "#7eb2ff"}}>
                    No Content
                </div>
                <OverlayTrigger key="header" placement="top"
                    overlay={
                        <Tooltip id={"tooltip-" + header}>
                            {header}
                        </Tooltip>
                    }>
                    <div className="title">
                        {header}
                    </div>
                </OverlayTrigger>
            </div>
        </div>
    )
}