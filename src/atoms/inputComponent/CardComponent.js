import React from "react";

function CardComponent({background}) {
  return (
    <>
      <div>
        <div className="gap-5" style={{ display: "inline-flex", width:"435px", fontSize:"20px",background:background}}>
          <h5>28 Aug 2023 </h5>
          <h5>Bangalore</h5>
          <h5>₹ 3,500/-</h5>
        </div>
        <p className="card-text mb-2" style={{fontSize:"10px", width:"435px",background:background }}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
      </div>
    </>
  );
}

export default CardComponent;
