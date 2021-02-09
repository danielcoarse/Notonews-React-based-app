import React from "react";

const Loader = () => {
  return (
    <div id="preloder">
      <div className="spinner-border text-white" id="loader" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
