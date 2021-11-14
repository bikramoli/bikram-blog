import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Data } from './Data';

import './OuterBlog.css';

function OuterBlog(props) {
    return (
        <a><Link to="/innerBlog">
            <div className="outerBlog">
                <span className="tag">{props.tag}</span>
                <h4 className="title">{props.title}</h4>
                <p>{props.description}</p>
                <div className="base">
                    <a>Learn more{" "}
                        <span><FaArrowAltCircleRight /></span>
                    </a>
                    <a className="author">
                        <strong> {props.author}</strong>
                        <li>2021/2/9</li>
                    </a>
                </div>
            </div>
        </Link></a>
    )
}
export default OuterBlog