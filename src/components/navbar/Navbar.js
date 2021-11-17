import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight, FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Theme } from "../theme/Theme";


import './Navbar.css'
import Themes from "../theme/Themes";

// This is create context to share data between components


function useNavbar() {
    const [toggle, setToggle] = useState(false)

    const [ThemeColor, setThemeColor] = useState("#8A2BE2")

    function Toggle() {
        setToggle(
            {
                ...toggle,
                toggle: !toggle
            }
        )
    }
    function changeColor1() {
        setThemeColor({
            ThemeColor: "#7CFC00"
        })

    };

    function changecolor2() {
        setThemeColor({
            ...ThemeColor,
            ThemeColor: "#708090"
        })
    };

    function changeColor3() {
        setThemeColor({
            ...ThemeColor,
            ThemeColor: "#8A2BE2"
        })
    };

    console.log(ThemeColor)
    return {
        ThemeColor,
        render: (
            <div>
                <div className="top-nav"></div>

                <div className="navBar" style={{ borderTop: `solid ${ThemeColor} 10px` }}>
                    <button onClick={Toggle} className="toggle">
                        <FaAlignRight />
                    </button>
                    <div className={toggle ? "nav-links show-nav" : "nav-links"}>
                        <div className="linkGroup">
                            <a><Link to="/">Home</Link></a>
                            <a><Link to="/about">My</Link></a>
                            <a><a href="https://github.com/bikramoli"><FaGithub /></a></a>
                            <a><a href="https://twitter.com/bikramoli75"><FaTwitter /></a></a>
                            <a><div class="dropdown">
                                <a class="dropbtn"><FaTools /></a>
                                <div class="dropdown-content">
                                    <a onClick={changeColor1} style={{ color: Theme.color }}>Bluevilote</a>
                                    <a onClick={changecolor2} style={{ color: Theme.color }}>Black</a>
                                    <a onClick={changeColor3} style={{ color: Theme.color }}>Gray</a>
                                </div>
                            </div></a>
                            <a><Themes /></a>

                        </div>
                    </div>
                </div>

            </div>
        )
    };

}
export default useNavbar