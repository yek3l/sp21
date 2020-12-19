import React from 'react';
import { Modal } from "react-bootstrap";
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import "../../styles/sassets/content-modal.scss";

export class ContentModal extends React.Component {

    /*
        Displays additional info for content-items
        Props include:
            - Header
            - Sub-header
            - modalContent
            - contentColor
    */

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

                <Modal show={this.state.show} onHide={this.hide} size="lg" centered>
                    <Modal.Header className="content-modal-header">
                        <Modal.Title>
                            {this.props.header}
                        </Modal.Title>
                        <div className="label" style={{backgroundColor : this.props.contentColor}}>
                            {this.props.subheader}
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.modalContent}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}