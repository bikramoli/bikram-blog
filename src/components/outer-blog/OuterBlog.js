import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useHistory } from "react-router";

import { Data } from './Data';

import './OuterBlog.css';

function OuterBlog(props) {

    const history = useHistory();

    function handleRoute() {
        console.log(props.id)
        history.push(`/innerBlog/${props.id}`);
    }
    return (

        <div className="outerBlog" onClick={handleRoute}>

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

    )
}
export default OuterBlog