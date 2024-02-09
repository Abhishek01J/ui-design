import React from "react";

function InputComponent({ text, label, type="", width }) {
  return (
    <div>
      <label
        style={{ size: "14px", textAlign: "left", paddingInlineEnd: "270px",fontSize:"14px",paddingRight:"40px",}}
      >
        {label}<span style={{color:'red'}}>*</span>
      </label>
      <div className="position-relative">
        <input
          style={{
            width: width,
            height: "35px",
            color: "#A6A6A6",
            border: "0.5px solid #A6A6A6",
            icon: "icon",
            fontSize:"12px",
            borderRadius:"4px",
            background: "#F2F2F2 0% 0% no-repeat padding-box",
            marginBottom:"20px"
          }}
          placeholder={text}
          type={type}
        ></input>
      </div>
      
    </div>
  );
}

export default InputComponent;
