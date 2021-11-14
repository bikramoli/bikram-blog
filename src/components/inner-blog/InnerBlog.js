import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { Datas } from '../outer-blog/Data';
import { useParams } from 'react-router';

import './InnerBlog.css'

function InnerBlog() {
    var { id } = useParams();

    return (
        <div className="innerBlogCover">
            <div className="innerBlog">
                <h1>{Datas[id].tag}</h1>
                <h2>{Datas[id].title}</h2>
                <p>{Datas[id].description}</p>
                <strong>{Datas[id].author}</strong>
                <p>{Datas[1].content}</p>

            </div>
            <ul className="innerBlog1">
                <li><Link to="/about"><FaArrowAltCircleRight />{" "}Introduction</Link></li>
                <li><Link to="/about"><FaArrowAltCircleRight />{" "}Detail Explanation about the Mobile App Development</Link></li>
                <li><Link to="/about"><FaArrowAltCircleRight />{" "}Use of REST API in android app using retrofit of volley library</Link></li>
                <li><Link to="/about"><FaArrowAltCircleRight />{" "}Conclusion</Link></li>
            </ul>
        </div>
    )
}
export default InnerBlog