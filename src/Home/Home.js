import Box from '@mui/material/Box';
import './Home.css';
import React from 'react';
import Services from '../Components/Services/Services';
import About from '../Components/About/About';
import { width } from '@mui/system';

const Home = () => {
    const url = 'https://thumbs.dreamstime.com/b/children-education-kid-read-book-school-boy-reading-books-dreaming-over-blackboard-background-92807607.jpg';
    return (
        <div style={{ width: '100%' }}>
            <Box sx={{ display: 'grid', p: 1, gridTemplateColumns: 'repeat(2, 1fr)' }} >
                <div className='homeElement'>
                    <h1 style={{ fontFamily: 'Akronim', fontSize: 200, marginTop: 5, color: 'green', width: "100%" }}> <span style={{ fontSize: 400 }}>W</span>elcome </h1>
                    <h2>To Trust Education Center</h2>
                    <p style={{ fontFamily: 'Lobster', color: 'red' }}>Your trust and our resposibility</p>
                    <p style={{ fontFamily: 'Lobster' }}>Why Programming Language is Important Nowadays</p>
                    <p style={{ fontSize: 20 }}>Programming languages use classes and functions that control commands. The reason that programming is so important is that it directs a computer to complete these commands over and over again, so people do not have to do the task repeatedly. Instead, the software can do it automatically and accurately.</p>
                </div>
                <div >
                    <img src={url} alt="" srcSet='' style={{ width: '100%', height: '800px' }} />
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