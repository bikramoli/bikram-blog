import React from 'react';
import { FaCopyright } from 'react-icons/fa';
import { Col, Row } from 'reactstrap';

import './Footer.css';


function Footer(Themecolor) {

    return (
        <>
            <Col className="footer" style={{ background: Themecolor.Themecolor }}>
                <span><strong className="licence">Developed by Bikram Oli</strong></span>
                <span> <h5><FaCopyright />{" "}Copyright @Bikram{" "}<span className="date">2021</span></h5></span>

            </Col>
        </>
    )
}
export default Footer