import React from 'react';
import useData from '../../Custom-hook/UseData';
import SingleManage from './SingleManage/SingleManage';
import './Manageinventory.css'
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [services] = useData([])
    const navigate = useNavigate()
    return (

        <div className='py-5'>
            <h1 className='text-center'>Mange Inventory</h1>
            <div>
                {
                    services.map(service => <SingleManage service={service} key={service._id}></SingleManage>)
                }
            </div>
            <div className="container">
                <div className='d-flex justify-content-center mt-5'>
                    <button className='btn-simple btn-add' onClick={() => navigate('/add-item')}>Add Item +</button>
                </div>
            </div>

        </div>
    );
};

export default ManageInventory;