import React from "react";
import "./Spinner.css";
const Loader = (props) => {
  return (
    // <div className="spinner-container justify-center flex items-center text-center">
    //   <div className="loading-spinner"></div>
    // </div>
    <>
      <div className="absolute text-center items-center bg-transparent">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="text-lg">Loading...</div>
      </div>
    </>
  );
};

export default Loader;
