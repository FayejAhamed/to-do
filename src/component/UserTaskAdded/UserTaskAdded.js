import React, { useState } from 'react';
import { set } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const UserTaskAdded = ({ data, deleteTask }) => {
    const [strikeThrough, setStrikeThrough] = useState(false)
    const { name, description, _id } = data;
    const success = () => {
        alert('successfully complete');
        setStrikeThrough(true)
    }
    return (
        // style={{textDecoration:line?"line-through":"none"}}
        <div className='w-50 mx-auto '>
            <div className='card-group grid grid-col-2  '>
                <div className=' border w-100 text-center p-2 mb-3'>
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-lg-3 col-md-12 col-sm-12'>
                            <p>{name}</p>
                            <p style={{textDecoration:strikeThrough?"line-through":"none"}}>{description}</p>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6'>
                            <button className='btn btn-success me-5' onClick={success}>complete</button>
                        </div>
                        <div className='col-lg-3 col-md-6 col-6'>
                            <button className='btn btn-danger me-5' onClick={() => deleteTask(data._id)}>Delete</button>
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default UserTaskAdded;