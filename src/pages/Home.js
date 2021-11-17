import React from 'react';

import Header from '../components/header/Header';
import OuterBlogMain from '../components/outer-blog/OuterBlogMain';


function Home(Themecolor) {
    return (
        <div>
            <Header />
            <OuterBlogMain Themecolor={Themecolor} />
        </div>

    )
}
export default Home