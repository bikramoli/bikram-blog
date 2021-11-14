import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { Datas } from '../outer-blog/Data';

import './InnerBlog.css'

function InnerBlog() {
    return (
        <div className="innerBlogCover">
            <div className="innerBlog">
                <h1>{Datas[0].tag}</h1>
                <h2>{Datas[0].title}</h2>
                <p>{Datas[0].description}</p>
                <strong>{Datas[0].author}</strong>
                <p>{Datas[1].content}</p>

            </div>
            <div className="innerBlog1">
                <li><Link to="/about"><FaArrowAltCircleRight />{" "} Introduction</Link></li>
                <li><Link to="/about"><FaArrowAltCircleRight />{" "}Detail Explanation about the Mobile App Development</Link></li>
                <li><Link to="/about"><FaArrowAltCircleRight />{" "}Use of REST API in android app using retrofit of volley liberary</Link></li>
                <li><Link to="/about"><FaArrowAltCircleRight />{" "}Conclusion</Link></li>
            </div>
        </div>
    )
}
export default InnerBlog