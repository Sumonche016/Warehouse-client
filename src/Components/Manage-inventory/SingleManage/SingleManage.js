import React from 'react';
import './SingleManage.css'
const SingleManage = (props) => {

    const { name, img, price, description } = props.service;

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className='d-flex single-manage-container  mb-2 p-3'>
                            <div>
                                <img className='img-manage' src={img} alt="" />
                            </div>
                            <div>
                                <h3 className='manage-item-tittle'>{name}</h3>
                                <p className='manage-item-des w-70'>{description}</p>
                            </div>
                            <div className='manage-button'>
                                <button>Delete</button>
                                <h1 className='manage-price'>${price}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleManage;