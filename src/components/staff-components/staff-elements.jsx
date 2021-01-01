import React from "react";
import { Card, Modal } from "react-bootstrap";
import { getStaffBio } from "../../course-data/course-data-util.jsx"
import { withPrefix } from "gatsby";
import staff_ui_config from "../../course-data/ui-config/staff-ui.config.json"
import "../../styles/sassets/staff-components.scss";

export class StaffCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            name: "",
            imgPath: withPrefix(`/course-data/staff/${props.staffKey}/profile_pic.png`),
            subheader: "",
            responses: [],
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.getBioData()
    }

    getBioData() {
        getStaffBio(this.props.staffKey)
            .then(bio => {
                this.loadBioData(bio)
            })
    }

    loadBioData(bio) {
        const card_config = staff_ui_config["card-config"];
        const subheaderKey = card_config["subheader"];
        const name = bio["name"];
        const subheader = bio[subheaderKey];
        const responses = bio["responses"];
        this.setState({
            name: name,
            subheader: subheader,
            responses: responses
        })
    }

    toggleModal() {
        let modalState = this.state.showModal;
        this.setState({
            showModal : (!modalState)
        })
    }
    
    render() {
        return (
            <Card style={{ width: '15rem' }}>
                <Card.Img src={this.state.imgPath}/>
                <Card.Body>
                    <Card.Text>
                        <div className="header">
                            {this.state.name}
                        </div>
                        <div className="role">
                            {this.props.role}
                        </div>
                        <div className="subheader">
                            {this.state.subheader}
                        </div>
                    </Card.Text>
                    <div className="staff-card-iconbar">
                        <span className="material-icons">
                            email
                        </span>
                        <BioModal 
                            toggleModal={this.toggleModal} 
                            showModal={this.state.showModal}
                            responses={this.state.responses}
                        />
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

function BioModal({toggleModal, showModal}) {
    return (
        <>
            <span className="material-icons" onClick={toggleModal}>
                person
            </span>
            <Modal show={showModal} onHide={toggleModal} size="lg" centered>
                <Modal.Header className="content-modal-header">
                    <Modal.Title>
                        Name Here
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Biography Would Go here.
                </Modal.Body>
            </Modal>
        </>
    )
}

export function RoleSection(label, people) {
    return (
        <div className="role-section">
            <div className="role-label">
                {label}
            </div>
            <div className="staff-cards">
                {people}
            </div>
        </div>
    )
}