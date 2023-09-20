import React from "react";
import loader from "../images/giphy.gif";

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <img src={loader} alt="loading gif" />
      </div>
    </div>
  );
};

export default Loader;
