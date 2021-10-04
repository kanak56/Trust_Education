import React from 'react';
import './Heading.css';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
const Heading = () => {

    return (
        <div className='header'>

            <Navbar bg='dark'>
                <NavLink to="/"> <FontAwesomeIcon style={{ color: 'white', fontSize: 40 }} icon={faGraduationCap} /></NavLink>

                <Nav className='nav' >
                    <NavLink className='navlink' to="/">Home</NavLink>
                    <NavLink className='navlink' to="/services">Our Services</NavLink>
                    <NavLink className='navlink' to="/about">About Us</NavLink>
                    <NavLink className='navlink' to="/branches">Our Branches</NavLink>
                </Nav>

            </Navbar>
        </div >
    );
};

export default Heading;