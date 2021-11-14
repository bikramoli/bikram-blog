import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Data } from './Data';

import './OuterBlog.css';

function OuterBlog() {
    return (
        <a><Link to="/about">
            <div className="outerBlog">
                <span className="tag">Development</span>
                <h4 className="title">Web App Development</h4>
                <p>This course is all about the basic of html and css, also consist of basic static web-app development, all about the basic of html and css, also consist of basic static web-app development... </p>
                <div className="base">
                    <a>Learn more{" "}
                        <span><FaArrowAltCircleRight /></span>
                    </a>
                    <a className="author">
                        <strong> Harry Potter</strong>
                        <li>2021/2/9</li>
                    </a>
                </div>
            </div>
        </Link></a>
    )
}
export default OuterBlog