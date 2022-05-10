import React from 'react';
import { toast } from 'react-toastify';

const SingleITem = (props) => {
    console.log(props)

    const { _id, name, img, price, description } = props.order;

    const handleDelete = (id) => {
        const deleteItem = () => {
            const confirm = window.confirm('are you sure to delete?')
            if (confirm) {
                const url = `https://boiling-shelf-19002.herokuapp.com/order/${id}`
                fetch(url, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            toast('Deleted')
                        }
                    })
            }
        }
        const deleteInventory = () => {
            const confirm = window.confirm('are you sure to delete?')
            if (confirm) {
                const url = `https://boiling-shelf-19002.herokuapp.com/manage-inventory/${id}`

                fetch(url, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            toast('Deleted')
                        }
                    })
            }
        }

        deleteInventory()
        deleteItem()


    }

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
                                <button className='btn-simple' onClick={() => handleDelete(_id)}>Delete</button>
                                <h1 className='manage-price'>${price}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleITem;