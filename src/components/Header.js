import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="top-info">
        <h1>This is your header!</h1>
      </div>
      <Typed
        className="typed-text"
        strings={["Aspiring Software Engineer", "Dilligent", "Resilient"]}
        typeSpeed={50}
        backSpeed={60}
        loop
      ></Typed>
    </div>
  );
};

export default Header;
