import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    const [crouses, setCrouse] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setCrouse(data));
    }, []);
    return (
        <div className='services' >

            <div style={{ display: 'grid', gridTemplateColumns: "repeat(3,1fr)", gridColumnGap: 15, padding: 40 }}>
                {
                    crouses.map(crouse => <Service
                        key={crouse.key}
                        crouse={crouse} ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;