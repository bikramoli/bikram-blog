import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight, FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


import './Navbar.css'

function Navbar() {
    const [state, setstate] = useState({
        toggle: false
    })
    function Toggle() {
        setstate(
            {
                toggle: !state.toggle
            }
        )
    }
    return (
        <>
            <div className="navBar">
                <button onClick={Toggle}>
                    <FaAlignRight />
                </button>
                <div className={state.toggle ? "nav-links show-nav" : "nav-links"}>
                    <div className="linkGroup">
                        <a><Link to="/">Home</Link></a>
                        <a><Link to="/about">About</Link></a>
                        <a><a href="https://github.com/bikramoli"><FaGithub /></a></a>
                        <a><Link to="/github"><FaTwitter /></Link></a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar