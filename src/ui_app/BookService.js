import React from "react";
import "./BookService.css";
import InputComponent from "../atoms/inputComponent/InputComponent";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function BookService({ showModal, showHideServiceModal }) {
  return (
    <>
      <Modal
        show={showModal}
        onHide={() => {
          showHideServiceModal(false);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "20px" }}>
            Service Booking
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputComponent label={"First name"} text={"eg. john"} width="383px"/>
          <br />
          <InputComponent label={"Last name"} text={"eg. Doe"} />
          <br />
          <InputComponent label={"Mobile number"} text={"+91"} />
          <br />
          <InputComponent label={"Chase number"} text={"eg. JYA205684"} />
          <br />
          <div>
            <InputComponent label={"Select date"} type={"date"} />
          </div>
          <br />
          <label style={{ paddingInlineEnd: "270px", fontSize: "14px" }}>
            Select location <span style={{ color: "red" }}>*</span>
          </label>
          <select
            style={{
              width: "383px",
              height: "35px",
              fontStyle: "Roboto",
              background: "#F2F2F2 0% 0% no-repeat padding-box",
              fontSize: "12px",
              borderRadius: "4px",
            }}
          >
            <option></option>
            <option> banglore</option>
            <option> chitrdurga</option>
            <option>hosadurga</option>
          </select>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              showHideServiceModal(false);
            }}
          >
            Cancel
          </Button>
          <Button variant="primary">Book</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BookService;
