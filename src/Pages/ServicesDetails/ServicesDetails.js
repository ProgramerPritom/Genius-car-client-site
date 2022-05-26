import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hooks/useServiceDetails';

const ServicesDetails = () => {
    const {servicesId} = useParams();
    const [service] = useServiceDetails(servicesId);
    
    return (
        <div>
            <h2>This is Services Details area:{service.name}</h2>
            <div className="text-center">
            <Link to={`/checkout/${servicesId}`}>
                <button className='btn btn-primary'>Process checkout</button>
            </Link>
            </div>
        </div>
    );
};

export default ServicesDetails;