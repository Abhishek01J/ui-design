import React from "react";
import "./Login.css";
import logo from "../image/atica@2x.jpg";
import video from "../image/loginvideo.mov";
import { Navigate, useNavigate } from "react-router-dom";
import InputComponent from "../atoms/inputComponent/InputComponent";
function LoginPage() {
  const navigate = useNavigate();
  // ---------------------------------------
  return (
    <div className="home">
      <div className="video">
        <video autoPlay muted src={video} />
      </div>
      <div className="loginpage">
        <div>
          <img src={logo} class="d-block w-1px h-1px" alt="" id="logo" />
        </div>
        <br></br>
        <div className="welcome">
          <h3>Welcome back!</h3>
        </div>
        <div id="lorem">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
        </div>
        <br></br>

        <InputComponent label={"Phone number"} text={""} width="336px" />

        <br></br>

        <InputComponent label={"password"} width="336px" />

        <br></br>

        <div className="login">
          <button
            id="button"
            onClick={() => {
              navigate("/navbar");
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
