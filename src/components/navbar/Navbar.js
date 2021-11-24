import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight, FaTwitter } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'


function useNavbar() {
    const [ThemeColor, setThemeColor] = useState("")
    const [isClick1, setisClick1] = useState(false)
    const [isClick2, setisClick2] = useState(false)
    const [isClick3, setisClick3] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const [username, setUsername] = useState('Seejan')


    function handleClick1() {
        setThemeColor("#8A2BE2");
        setisClick1(true);
        setisClick2(false);
        setisClick3(false)
    }
    function handleClick2() {
        setThemeColor("#00FF00");
        setisClick2(true)
        setisClick1(false)
        setisClick3(false)
    }
    function handleClick3() {
        setThemeColor("#2F4F4F");
        setisClick3(true)
        setisClick1(false)
        setisClick2(false)
    }
    console.log(ThemeColor)
    return {
        ThemeColor,
        render: (
            <div>
                <div className="top-nav"></div>

                <div className="navBar" style={{ borderTop: `solid ${ThemeColor} 10px` }}>
                    {
                        isLogin ?
                            <Logout />
                            : <div style={{ float: "right", margin: '0.5rem', marginRight: '1rem' }}>
                                <Link to="/login">Login</Link>
                            </div>
                    }
                    <div >
                        <div className="linkGroup">
                            <a><Link to="/">Home</Link></a>
                            <a><Link to="/about">My</Link></a>
                            <a><a href="https://github.com/bikramoli"><FaGithub /></a></a>
                            <a><a href="https://twitter.com/bikramoli75"><FaTwitter /></a></a>
                            <a><div className="dropdown">
                                <a className="dropbtn"><FaTools /></a>
                                <div className="dropdown-content">
                                    <a onClick={handleClick1} style={{ color: isClick1 ? ThemeColor : "#000000" }}>Bluevilote</a>
                                    <a onClick={handleClick2} style={{ color: isClick2 ? ThemeColor : "#000000" }}>Lime</a>
                                    <a onClick={handleClick3} style={{ color: isClick3 ? ThemeColor : "#000000" }}>DarkGray</a>

                                </div>
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    function Logout() {
        return (
            <>
                <div className="profile-dropdown" onClick={() => { alert("hello") }}>
                    <img className="profile" src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="profile"></img>
                    <strong className="name">{username}</strong>
                    <div className="logout">
                        <a>Logout</a>
                    </div>
                </div>
            </>
        )
    };


}
export default useNavbar