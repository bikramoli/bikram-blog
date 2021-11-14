import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header';
import OuterBlogMain from '../components/outer-blog/OuterBlogMain';
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <div>
            <Header />
            <OuterBlogMain />
            {/* <Footer /> */}
        </div>

    )
}
export default Home