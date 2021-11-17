import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight, FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Theme } from "../theme/Theme";


import './Navbar.css'


// This is create context to share data between components


function useNavbar() {
    const [toggle, setToggle] = useState(false)

    const [ThemeColor, setThemeColor] = useState("")

    function Toggle() {
        setToggle(
            {
                toggle: !toggle
            }
        )
    }
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
                                <a>{ThemeColor}</a>
                                <div class="dropdown-content">
                                    <a onClick={function () { setThemeColor("#8A2BE2") }} style={{ color: Theme.color }}>Bluevilote</a>
                                    <a onClick={function () { setThemeColor("#00FF00") }} style={{ color: Theme.color }}>Lime</a>
                                    <a onClick={function () { setThemeColor("#2F4F4F") }} style={{ color: Theme.color }}>DarkGray</a>
                                </div>
                            </div></a>


                        </div>
                    </div>
                </div>

            </div>
        )
    };

}
export default useNavbar