import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';


export function ContentItem(
    header,
    subheader,
    contentColor,
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

function ContentItemLink(link) {
    /*
        Link should be an object containing the following:
            - title
            - dest
            - icon
    */
   if (link.dest === null || link.dest === undefined) {
        return (
            <span className="material-icons disabled">
                {link.icon}
            </span>
        );
   }
   return (
        <a className="icon-link" href={link.dest} target="_blank" rel="noreferrer">
            <OverlayTrigger key="header" placement="top"
                overlay={
                    <Tooltip id={"tooltip-" + link.title}>
                        {link.title}
                    </Tooltip>
                }>
                        <span className="material-icons">
                            {link.icon}
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
                    No New Content
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