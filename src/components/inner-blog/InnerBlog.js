import React from 'react';

import { Datas } from '../outer-blog/Data';

import './InnerBlog.css'

function InnerBlog() {
    return (
        <div className="innerBlog">
            <h1>{Datas[0].tag}</h1>
            <h2>{Datas[0].title}</h2>
            <p>{Datas[0].description}</p>
            <strong>{Datas[0].author}</strong>

        </div>
    )
}
export default InnerBlog