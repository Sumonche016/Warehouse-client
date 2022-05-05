import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid' src="https://demo.vehica.com/wp-content/uploads/2021/02/dealership.jpg" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h1 className='about-tittle'>About Us</h1>
                        <div>
                            <p className='first-para'>How the adventure ended will be seen anon. Aouda was anxious, though she said nothing.</p>

                            <span className='mb-3 second-para'>As for Passepartout, he thought Mr. Fogg’s manoeuvre simply glorious. The captain had said “between eleven and twelve knots,” and the Henrietta confirmed his prediction. How the adventure ended will be seen anon.
                                Aouda was anxious, though she said nothing.</span>

                            <ul>
                                <li><i class="fas fa-check-circle"></i>Quality Cars at Guaranteed Prices</li>
                                <li><i class="fas fa-check-circle"></i>Routine Service Available</li>
                                <li><i class="fas fa-check-circle"></i>Turn Your Car Into Cash</li>
                            </ul>
                            <button className='btn'>About Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;