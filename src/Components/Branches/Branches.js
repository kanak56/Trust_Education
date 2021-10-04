import React from 'react';

const Branches = () => {
    return (
        <div>
            <h1 style={{ fontFamily: 'Lobster', textDecoration: 'underline' }}>Bangladeshi Branches</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }}>
                <ul style={{ textAlign: 'left', fontSize: 20 }}>
                    <li><a href="#balnk" target="_blank">Dhaka</a></li>
                    <li><a href="#balnk" target="_blank">Mirpur</a></li>
                    <li><a href="#balnk" target="_blank">Framgate</a></li>
                    <li><a href="#balnk" target="_blank">Chittagram</a></li>
                    <li><a href="#balnk" target="_blank">Feni</a></li>
                    <li><a href="#balnk" target="_blank">Rajshahi</a></li>
                    <li><a href="#balnk" target="_blank">Barisal</a></li>
                    <li><a href="#balnk" target="_blank">Shylet</a></li>
                    <li><a href="#balnk" target="_blank">Narayanganj</a></li>
                    <li><a href="#balnk" target="_blank">Gazipur</a></li>
                    <li><a href="#balnk" target="_blank">Rongpur</a></li>
                    <li><a href="#balnk" target="_blank">Cox-Bazar</a></li>
                    <li><a href="#balnk" target="_blank">Cumilla</a></li>
                </ul>
                <ul style={{ textAlign: 'left', fontSize: 20 }}>
                    <li><a href="#balnk" target="_blank">Rangamati</a></li>
                    <li><a href="#balnk" target="_blank">Noakhali</a></li>
                    <li><a href="#balnk" target="_blank">Laksmipur</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Branches;