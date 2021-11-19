import React from "react";
import { Theme } from "../components/theme/Theme";
import me from "./images/me.png";

import './About.css'

function About() {
    const op = '<';
    const cl = '>'
    return (
        <div className="about">
            <img src={me} alt="Person using computer" className="about-img"></img>
            <article>
                <h2><span>{op}article <span style={{ color: "#4169E1" }}>className=<span style={{ color: "#FFA500" }}>"Developer-Info"</span></span>{cl}</span></h2>
                <p className="animation-data">Hello my name is Bikram Oli and I am a developer, If you want to know more about me please click below</p>
                <h2><span>{op}/article{cl}</span></h2>
            </article>
            <button style={{ background: Theme.color, borderRadius: 5, color: "white" }}>My Portfolio</button>

        </div>
    )
}
export default About