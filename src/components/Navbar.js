import React from "react";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
        <h5 className="mx-auto mt-1" id="counters"><span id="currentScore">Score: {props.score}</span><br/>Top score: {props.top} </h5>
    </nav>
)

export default Navbar;