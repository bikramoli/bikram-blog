import React from 'react';
import { Link } from 'react-router-dom';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { Datas } from '../outer-blog/Data';
import { useParams } from 'react-router';
import Comment from './Comment';

import './InnerBlog.css'
import Comment2 from './Comment2';

function InnerBlog() {
    var { id } = useParams();

    return (
        <div style={{ background:'lightgray'}}>
            <div className="innerblogCover">
                <div className="innerBlog" >
                    <strong className="tag-1">* {Datas[id].tag} *</strong>
                    <span><strong className="author">Author: {Datas[id].author}</strong></span>
                    <h2>{Datas[id].title}</h2>
                    <img src={Datas[id].img} alt="Image here.."></img>
                    <p>{Datas[id].description}</p>
                    <p>{Datas[1].content}</p>
                    
                </div>
                    <Comment2 />               
            </div>  
        </div>
    )
}
export default InnerBlog