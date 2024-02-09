import React, { useState } from "react";
import "./Navbar.css";
import logo1 from "../image/atica@2x.jpg";
import profile from "../image/profile.jpg";
import motor from "../image/motor.jpg";
import map from "../image/location.jpg";
import bike1 from "../image/ktmRc.jpg";
import bike2 from "../image/ktmDuke.jpg";
import bike3 from "../image/ktmAdv.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import BookService from "./BookService";
import ServiceHistory from "./ServiceHistory";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [serviceShowModal, setServiceShowModal] = useState(false);

  const showHideServiceModal = (show) => {
    setShowModal(show);
  };
  const showHistoryHideModal = (show) => {
    setServiceShowModal(show);
  };
  return (
    <>
      <div
        style={{
          width: "1280px",
          height: "800px",
          border: "transperent",
          backgroundColor: "#F9F8FF",
        }}
      >
        <nav
          class="navbar bg-body-tertiary"
          style={{
            border: "8px",
            width: "1232px",
            height: "80px",
            background: " #FFFFFF 0% 0% no-repeat padding-box",
          }}
        >
          <div class="container">
            <a class="navbar-brand">
              <img src={logo1} alt="Bootstrap" width="40px" height="40px" />
            </a>
            <a class="float-end" id="end">
              <img src={profile} alt="Bootstrap" width="40px" height="40px" />
            </a>
          </div>
        </nav>
        <div
          style={{
            width: "1200px",
            height: "160px",
            background: " #FFFFFF 0% 0% no-repeat padding-box",
            border: "1px solid #685F9F",
            borderRadius: "8px",
            opacity: "1",
          }}
        >
          <div class="container text-center">
            <div class="row justify-content-start">
              <div class="col-6">
                <img src={motor} alt=""></img>
                <label id="company" className="justify-text-start">
                  Company Name <br />{" "}
                  <p id="number"> &nbsp; +91 8567958621 | +91 9568745632</p>
                </label>
              </div>
              <div class="col-6" id="map">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{
                    "--fa-primary-color": "#67159d",
                    "--fa-secondary-color": "#67159d",
                    "--fa-secondary-opacity": "1",
                    color: "rgb(103 57 157)",
                  }}
                />
                <p
                  className="float-end"
                  style={{ width: "369px", color: "#333645", fontSize: "18px" }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="container text-center">
            <div className="d-flex justify-content-center">
              <div class="col">
                <div class="card mx-2">
                  <img src={bike1} class="card-img-top" alt="..." id="image" />
                  <div class="card-body">
                    <h5 class="card-title" id="RC">
                      KTM RC 390
                    </h5>
                    <p class="card-text" id="lorem">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna.
                    </p>

                    <button
                      style={{ backgroundColor: "#F2F2F2", marginTop: "20px" }}
                      id="service"
                      onClick={() => {
                        setServiceShowModal(true);
                      }}
                    >
                      Service History
                    </button>

                    <button
                      style={{ backgroundColor: "#FE5E29", marginTop: "20px" }}
                      id="book"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card mx-2">
                  <img src={bike2} class="card-img-top" alt="..." id="image" />
                  <div className="card-body">
                    <h5 class="card-title" id="RC">
                      KTM Duke 390
                    </h5>
                    <p class="card-text" id="lorem">
                      {" "}
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna
                    </p>
                    <button
                      style={{ backgroundColor: "#F2F2F2", marginTop: "20px" }}
                      id="service"
                      onClick={() => {
                        setServiceShowModal(true);
                      }}
                    >
                      Service History
                    </button>
                    <button
                      style={{ backgroundColor: "#FE5E29", marginTop: "20px" }}
                      id="book"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      Book Service
                    </button>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src={bike3} class="card-img-top" alt="..." id="image" />
                  <div class="card-body">
                    <h5 class="card-title" id="RC">
                      KTM ADV 390
                    </h5>
                    <p class="card-text" id="lorem">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna
                    </p>
                    <button
                      style={{ backgroundColor: "#F2F2F2", marginTop: "20px" }}
                      id="service"
                      onClick={() => {
                        setServiceShowModal(true);
                      }}
                    >
                      Service History
                    </button>
                    <button
                      style={{ backgroundColor: "#FE5E29", marginTop: "20px" }}
                      id="book"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      Book Service{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && (
          <BookService
            showModal={showModal}
            showHideServiceModal={showHideServiceModal}
          />
        )}
        {serviceShowModal && (
          <ServiceHistory
            serviceShowModal={serviceShowModal}
            showHistoryHideModal={showHistoryHideModal}
          />
        )}
      </div>
    </>
  );
}

export default Navbar;
