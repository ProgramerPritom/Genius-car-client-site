import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {_id,name,price,description,img} = props.service;
    const navigate = useNavigate();

    const navigateServiceToDetails = id =>{
        navigate(`/services/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-50' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateServiceToDetails(_id)} className='btn btn-primary'>Book {name}</button>
        </div>
    );
};

export default Service;