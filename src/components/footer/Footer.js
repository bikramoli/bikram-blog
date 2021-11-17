import React from 'react';
import { Theme } from '../theme/Theme';

import './Footer.css';
import colorContext from '../navbar/Navbar';

function Footer() {
    return (

        <div className="footer" style={{ background: Theme.color }}>
            <colorContext.consumer>
                <strong className="licence">Developed by Bikram Oli</strong><span>{color}</span>
                <h5>Copyright @Bikram{" "}<span className="date">2021</span></h5>
            </colorContext.consumer>
        </div>
    )
}
export default Footer