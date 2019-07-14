import React from "react";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark mx-auto">
        <h5 className="ml-auto mt-2" id="counters">Score: {props.score}<br/>Top score: {props.top} </h5>
    </nav>
)

export default Navbar;