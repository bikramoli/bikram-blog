import React from "react";
import { FaTwitter } from "react-icons/fa"

import './Header.css'

function Header() {
    return (
        <div className="header">
            <h1>
                <span>Explore</span>{" "}
                <span className="middle-word">Learn</span>{" "}
                <span>Build</span>
            </h1>
            <p>
                ‘A man who reads too much and uses his own brain too little falls into lazy habits of thinking.’ –Albert Einstein
            </p>
        </div>
    )
}
export default Header