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
    function changeColor1() {
        console.log(Theme.color1)
    }
    function changecolor2() {
        console.log(Theme.color2)
    }
    function changeColor3() {
        console.log(Theme.color3)
    }
    return (
        <div>
            <div className="top-nav"></div>
            <div className="navBar" style={{ borderTop: `solid ${Theme.color} 10px` }}>
                <button onClick={Toggle} className="toggle">
                    <FaAlignRight />
                </button>
                <div className={state.toggle ? "nav-links show-nav" : "nav-links"}>
                    <div className="linkGroup">
                        <a><Link to="/">Home</Link></a>
                        <a><Link to="/about">My</Link></a>
                        <a><a href="https://github.com/bikramoli"><FaGithub /></a></a>
                        <a><a href="https://twitter.com/bikramoli75"><FaTwitter /></a></a>
                        <a><div class="dropdown">
                            <a class="dropbtn"><FaTools /></a>
                            <div class="dropdown-content">
                                <a onClick={changeColor1} style={{ color: Theme.color3 }}>Bluevilote</a>
                                <a onClick={changecolor2} style={{ color: Theme.color2 }}>Black</a>
                                <a onClick={changeColor3} style={{ color: Theme.color }}>Gray</a>
                            </div>
                        </div></a>
                        <a><Themes /></a>

                    </div>
                </div>
            </div>
        </div>
    );

}
export default Navbar