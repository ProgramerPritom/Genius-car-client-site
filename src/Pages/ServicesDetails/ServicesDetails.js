import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServicesDetails = () => {
    const {servicesId} = useParams();
    const [service,setService] = useState({});
    useEffect(()=>{
        const url = `http://localhost:5000/service/${servicesId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data));
    },[])
    return (
        <div>
            <h2>This is Services Details area:{service.name}</h2>
            <div className="text-center">
            <Link to='/checkout'>
                <button className='btn btn-primary'>Process checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServicesDetails;