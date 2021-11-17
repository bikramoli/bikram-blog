import React from 'react';
import { Theme } from '../theme/Theme';

import './Footer.css';


function Footer(ThemeColor) {
    return (

        <div className="footer" style={{ background: ThemeColor }}>
            <strong className="licence">Developed by Bikram Oli</strong>
            <h5>Copyright @Bikram{" "}<span className="date">2021</span></h5>
        </div>

    )
}
export default Footer