import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useHistory } from "react-router";
import { Theme } from "../theme/Theme";


import './OuterBlog.css';

function OuterBlog(props) {

    const history = useHistory();

    function handleRoute() {
        console.log(props.id)
        history.push(`/innerBlog/${props.id}`);
    }

    return (
        <div className="outerBlog" style={{ borderBottom: `solid ${Theme.color}` }} onClick={handleRoute}>

            <span className="tag" style={{ background: Theme.color }}>{props.tag}</span>
            <h4 className="title">{props.title}</h4>
            <p>{props.description}</p>
            <div className="base">

                <span>Learn more{" "}
                    <span><FaArrowAltCircleRight /></span>
                </span>

                <span className="author">
                    <strong> {props.author}</strong>
                    <li>{props.date}</li>
                </span>
            </div>
        </div>

    )
}
export default OuterBlog