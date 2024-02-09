import React from "react";
import Modal from "react-bootstrap/Modal";
import "./ServiceHistory.css";
import CardComponent from "../atoms/inputComponent/CardComponent";

function ServiceHistory({ serviceShowModal, showHistoryHideModal }) {
  return (
    <>
      <Modal
        class="justify-content-end"
        style={{ marginLeft: "400px" }}
        show={serviceShowModal}
        onHide={() => {
          showHistoryHideModal(false);
        }}
      >
        <Modal.Header closeButton style={{ fontSize: "10px",height:'50px' }}>
          <Modal.Title style={{ fontSize: "20px" }}>History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardComponent background="#F0F8FF" />
          <CardComponent />
          <CardComponent background="#F0F8FF" />
          <CardComponent />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ServiceHistory;
