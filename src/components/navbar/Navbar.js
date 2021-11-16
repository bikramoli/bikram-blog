import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight, FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Theme } from "../theme/Theme";


import './Navbar.css'
import Themes from "../theme/Themes";

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
        <div>
            <div className="top-nav"></div>
            <div className="navBar" style={{ borderTop: `solid ${Theme.color} 10px` }}>
                <button onClick={Toggle}>
                    <FaAlignRight />
                </button>
                <div className={state.toggle ? "nav-links show-nav" : "nav-links"}>
                    <div className="linkGroup">
                        <a><Link to="/">Home</Link></a>
                        <a><Link to="/about">My</Link></a>
                        <a><a href="https://github.com/bikramoli"><FaGithub /></a></a>
                        <a><a href="https://twitter.com/bikramoli75"><FaTwitter /></a></a>
                        <a><FaTools /></a>
                        <a><Themes /></a>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default Navbar