import React from 'react';
import { QuickLink } from "../quick-links";
import { Modal } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import "../../styles/sassets/content-modal.scss";

export class ContentModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show : false
        }
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    show() {
        this.setState({
            show : true
        })
    }

    hide() {
        this.setState({
            show : false
        })
    }

    render() {
        let quickLinks = [];
        this.props.links.forEach(link => { 
            quickLinks.push(QuickLink(link.icon, link.title, link.dest))
        })
        return (
            <>  
                <button onClick={this.show} className="content-modal-button">
                    <OverlayTrigger key="header" placement="top"
                        overlay={
                            <Tooltip id={"tooltip-" + this.props.header}>
                                more details
                            </Tooltip>
                        }>
                                <span className="material-icons">
                                    read_more
                                </span>
                    </ OverlayTrigger>
                </button>
                <Modal show={this.state.show} onHide={this.hide} centered>
                    <Modal.Header className="content-modal-header">
                        <h4>
                            {this.props.subheader}
                        </h4>
                        <Modal.Title>
                            {this.props.header}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {quickLinks}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

function LectureContentTemplate(data) {
    let liveSessionLink = getQuickLink(data, "live_session_recording", "live session recording", "video_call");
    return (
        <>
            <div class="modal-links">
                {liveSessionLink}
            </div>
        </>
    )
}

function getQuickLink(data, key, label, icon) {
    let link = data[key];
    if (link !== undefined && link !== null) {
        return QuickLink(icon, label, link)
    }
}