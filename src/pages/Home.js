import React from 'react';

import Header from '../components/header/Header';
import OuterBlogMain from '../components/outer-blog/OuterBlogMain';


function Home(props) {
    return (
        <div>

            <Header />
            <OuterBlogMain Themecolor={props.Themec} />
        </div>

    )
}
export default Home