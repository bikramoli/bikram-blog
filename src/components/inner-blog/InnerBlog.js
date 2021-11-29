import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'reactstrap';

import { FaArrowAltCircleRight } from "react-icons/fa";
import { Datas } from '../outer-blog/Data';
import { useParams } from 'react-router';
import Comment from './Comment';

import './InnerBlog.css'
import Comment2 from './Comment2';

function InnerBlog() {
    var { id } = useParams();

    return (
        <div style={{ background:'lightgray', textAlign:'center'}}>
            <div className="innerblogCover">
                <div className="innerBlog">
                    <h1>hello</h1>
                    {/* <strong className="tag-1">* {Datas[id].tag} *</strong>
                    <span><strong className="author">Author: {Datas[id].author}</strong></span>
                    <h2>{Datas[id].title}</h2>
                    <img src={Datas[id].img}></img>
                    <p>{Datas[id].description}</p>
                    <p>{Datas[1].content}</p> */}
                    
                </div>
                <div style={{ marginBottom: "4rem" }}>
                    <Comment2 /> 
                </div>               
            </div>  
        </div>
    )
}
export default InnerBlog