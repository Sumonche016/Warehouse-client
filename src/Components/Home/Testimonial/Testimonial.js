import React from 'react';
import './testi.css'

const Testimonial = () => {
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row gx-3 py-5">
                    <div className="col-md-12 text-center">
                        <h1 className='testimonial-tittle'>Testimonials</h1>
                        <p className="testimonial-des">Visit one of the largest used car dealerships
                            in the New York. Visit us today.</p>
                    </div>
                </div>

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-center testi-box">
                                <div>
                                    <img className='image-testi' src="testimonial.jpg" alt="" />
                                </div>
                                <div className="star mt-3">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>

                                <div>
                                    <p className='testi-des'>

                                        A really positive car-buying experience. No hard sell, but plenty of time to show us the car and answer all our questions.
                                    </p>
                                </div>

                                <div>
                                    <h5 className='client-name'>Willard Donovan </h5>
                                    <p className='happy'>Happy Customer</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center testi-box box-middle">
                                <div>
                                    <img className='image-testi' src="testimonial.jpg" alt="" />
                                </div>
                                <div className="star mt-3">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>

                                <div>
                                    <p className='testi-des'>

                                        A really positive car-buying experience. No hard sell, but plenty of time to show us the car and answer all our questions.
                                    </p>
                                </div>

                                <div>
                                    <h5 className='client-name'>Willard Donovan </h5>
                                    <p className='happy'>Happy Customer</p>
                                </div>
                            </div>
                            <div className="col-md-4 text-center testi-box">
                                <div>
                                    <img className='image-testi' src="testimonial.jpg" alt="" />
                                </div>
                                <div className="star mt-3">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>

                                <div>
                                    <p className='testi-des'>

                                        A really positive car-buying experience. No hard sell, but plenty of time to show us the car and answer all our questions.
                                    </p>
                                </div>

                                <div>
                                    <h5 className='client-name'>Willard Donovan </h5>
                                    <p className='happy'>Happy Customer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Testimonial;