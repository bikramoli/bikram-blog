import React from 'react';

import './Footer.css';


function Footer(Themecolor) {
    console.log(Themecolor.Themecolor)

    return (

        <div className="footer" style={{ background: Themecolor.Themecolor }}>
            <strong className="licence">Developed by Bikram Oli</strong>
            <h5>Copyright @Bikram<span className="date">2021</span></h5>

        </div>

    )
}
export default Footer