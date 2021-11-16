import React from 'react';
import { Theme } from '../theme/Theme';

import './Footer.css';

function Footer() {
    return (
        <div className="footer" style={{ background: Theme.color }}>
            <strong className="licence">Developed by Bikram Oli</strong>
            <h5>Copyright @Bikram{" "}<span className="date">2021</span></h5>
        </div>
    )
}
export default Footer