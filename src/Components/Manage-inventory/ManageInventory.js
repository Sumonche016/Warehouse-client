import React from 'react';
import useData from '../../Custom-hook/UseData';
import SingleManage from './SingleManage/SingleManage';

const ManageInventory = () => {
    const [services] = useData([])
    return (
        <div className='py-5'>
            {
                services.map(service => <SingleManage service={service} key={service._id}></SingleManage>)
            }
        </div>
    );
};

export default ManageInventory;