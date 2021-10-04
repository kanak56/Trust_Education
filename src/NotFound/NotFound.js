
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { green, indigo } from '@mui/material/colors';
import React from 'react';
import { Badge } from 'react-bootstrap';

const NotFound = () => {
    const color = green[400]
    return (
        <div>
            <h1>

                <Badge bg='secondary' style={{ color, height: 100, width: '100%', fontSize: 280 }} >
                    <FontAwesomeIcon style={{ color: 'white', fontSize: 80, position: 'absolute', right: 740, top: 270 }} icon={faGraduationCap} />
                    4<span style={{ fontSize: 180 }}>0</span>4</Badge>
            </h1>
            <br /><br />
            <p style={{ fontSize: 30 }}>Sorry Page Not Found!!</p>
        </div>
    );
};

export default NotFound;