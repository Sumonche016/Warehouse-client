import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import SingleITem from './Single-My-Item/SingleITem';

const MyItem = () => {

    const [orders, setOrder] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `https://boiling-shelf-19002.herokuapp.com/order?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accesToken')}`
                }
            })
            setOrder(data)
        }
        getOrders()

    }, [orders])
    return (
        <div>
            {
                orders.map(order => <SingleITem key={order._id} order={order}></SingleITem>)
            }
        </div>
    );
};

export default MyItem;