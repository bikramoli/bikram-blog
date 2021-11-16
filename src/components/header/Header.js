import React from "react";
import { Theme } from "../theme/Theme";

import './Header.css'
import R from './images/R.png';
import Learn from './images/Learn.png';

function Header() {
    return (
        <div className="header">
            <h1>
                <span><img src={R}></img></span>
                <span>Explor</span>{" "}
                <span>&{" "}</span>
                {/* <span className="middle-word" style={{ color: Theme.color }}>Learn</span>{" "} */}
                <span><img src={Learn} className="middle-word"></img></span>

            </h1>
            <p>
                "A man who reads too much and uses his own brain too little falls into lazy habits of thinking." –Albert Einstein
            </p>
        </div>
    )
}
export default Header