import React from 'react'
import home1 from '../img/home1.png';

const AboutSection = () => {
    return (
        <div>
            <div className="discription">
                <div className="titile">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>True</h2>
                    </div>
                </div>
                <p>Contact us for any photpgraphy or videography idea you have professionals with amazing skills. </p>
                <button>Contact Us</button>
            </div>
            <img src={home1} alt="guy with camera" />
        </div>
    )
}

export default AboutSection;
