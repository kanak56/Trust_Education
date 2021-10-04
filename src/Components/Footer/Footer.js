import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div style={{ display: 'grid', gridTemplateColumns: "repeat(4,1fr)", }}>
                <div>
                    <h2>Our Activities</h2>
                    <ul>
                        <li>We provide the Best Tutor</li>
                        <li>Coding Contest</li>
                        <li>Progarmming Challeges</li>
                        <li>Developer of the country</li>
                    </ul>
                </div>
                <div>
                    <h2>Free Services</h2>
                    <ul>
                        <li>Free Crouses</li>
                        <li>Free Seminar</li>
                        <li>Free WorkShop</li>
                    </ul>
                </div>
                <div><h2>About Us</h2>
                    <ul>
                        <li>
                            Trust us in Education
                        </li>
                        <li>We Teach in a very easy way</li>
                    </ul>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <p>For any Quary Please feel free to contact us</p>
                    <p>mail: <a href="#Blank">www.trustedu234@gmail.com</a> </p>
                    <p>website: <a href="#blank">www.trutedu.info</a></p>
                </div>
            </div>

            <small> &copy; All rights are Reserved by Kanak Chakma</small>
        </div>
    );
};

export default Footer;