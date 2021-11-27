import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { Datas } from '../outer-blog/Data';
import { useParams } from 'react-router';
import Comment from './Comment';

import './InnerBlog.css'

function InnerBlog() {
    var { id } = useParams();

    return (
        <>
            <div className="innerBlogCover">
                <div className="innerBlog">
                    <strong className="tag-1">* {Datas[id].tag} *</strong>
                    <span> <strong className="author">Author: {Datas[id].author}</strong></span>
                    <h2>{Datas[id].title}</h2>
                    <img src={Datas[id].img}></img>
                    <p>{Datas[id].description}</p>
                    <p>{Datas[1].content}</p>

                </div>
                <ul className="innerBlog1">
                    <li><Link to="/about"><FaArrowAltCircleRight />{" "}Introduction</Link></li>
                    <li><Link to="/about"><FaArrowAltCircleRight />{" "}Detail Explanation about the Mobile App Development</Link></li>
                    <li><Link to="/about"><FaArrowAltCircleRight />{" "}Use of REST API in android app using retrofit of volley library</Link></li>
                    <li><Link to="/about"><FaArrowAltCircleRight />{" "}Conclusion</Link></li>
                </ul>
            </div>
            <div style={{ marginBottom: "4rem" }}>
                <Comment />
            </div>
        </>
    )
}
export default InnerBlog