import React from 'react';
//import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png'


const ServicesSection = () => {
    return (
        <div className='services'>
            <div className="discription">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>lorem ipsum dolor sit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>lorem ipsum dolor sit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphram" />
                            <h3>Diaphram</h3>
                        </div>
                        <p>lorem ipsum dolor sit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="mony" />
                            <h3>Affordable</h3>
                        </div>
                        <p>lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>
            <div className="img">
                <img src={home2} alt="home2" />
            </div>
        </div>
    )
}

export default ServicesSection
