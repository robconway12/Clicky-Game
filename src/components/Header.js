import React from "react";

const Header = props => (
  <div
    className="container text-center d-flex justify-content-around"
    id="header-container"
  >
    <h1 className="mt-3" id="logo">
      <b>Clicky Game</b>
    </h1>
    <h5 className="subtitle">
      Try to click on each image once.
      <br />
      But... the tiles will jumble after each click!
      <br />
      If you click on one twice, the score starts over.
    </h5>
  </div>
);

export default Header;
