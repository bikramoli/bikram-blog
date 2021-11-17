import React from 'react';

import OuterBlog from './OuterBlog';
import { Datas } from './Data';


import './OuterBlogMain.css'

function OuterBlogMain() {

    return (
        <div className="blogs">
            {Datas.map(function (data) {
                const { id, tag, title, description, author, date } = data
                return (
                    <OuterBlog key={id} id={id} tag={tag} title={title} description={description} author={author} date={date} />
                )
            })}


        </div>
    )
}
export default OuterBlogMain