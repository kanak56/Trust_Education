import Box from '@mui/material/Box';
import './Home.css';
import React from 'react';
import Services from '../Components/Services/Services';
import About from '../Components/About/About';
import { width } from '@mui/system';

const Home = () => {
    const url = 'https://images.unsplash.com/photo-1601807576163-587225545555?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1073&q=80';
    return (
        <div style={{ width: '100%' }}>
            <Box sx={{ p: 1 }} >
                <div className='homeElement'>
                    <div>
                        <h1 style={{ fontFamily: 'Akronim', fontSize: 200, marginTop: 5, color: 'white', width: "100%" }}> <span style={{ fontSize: 400 }}>W</span>elcome </h1>
                        <h2>To Trust Education Center</h2>
                        <p style={{ fontFamily: 'Lobster', color: 'white' }}>Your trust and our resposibility</p>
                    </div>
                    <div className='homeinfo'>
                        <p style={{ fontFamily: 'Lobster' }}>Why Programming Language is Important Nowadays</p>
                        <p style={{ fontSize: 20 }}>Programming languages use classes and functions that control commands. The reason that programming is so important is that it directs a computer to complete these commands over and over again, so people do not have to do the task repeatedly. Instead, the software can do it automatically and accurately.</p>
                    </div>

                </div>

            </Box >

            <br />
            <h1 style={{ fontFamily: 'Lobster', marginTop: 20, color: 'red' }}>We are Offering the best Education Services</h1>
            <br />
            <br />
            <h3 style={{ fontFamily: 'Akronim', textDecoration: "underline", fontSize: 100 }}>Our Popular Courses</h3>
            <Services></Services>
            <br />
            <h3 style={{ fontSize: 50 }}>About Us</h3>
            <About></About>
        </div >
    );
};

export default Home;