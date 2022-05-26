import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hooks/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const {servicesId} = useParams();
    const [service] = useServiceDetails(servicesId);
    const [user] = useAuthState(auth);
    // console.log(user)


    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            name:user.displayName,
            email : user.email,
            serviceId: servicesId,
            address: event.target.address.value,
            phone: event.target.phone.value

        }
        // console.log(order);
        axios.post('http://localhost:5000/order',order)
        .then(res => {
            const {data} = res;
            if (data.insertedId) {
                toast('Your order Booked');
                event.target.reset();
            }
        })



    }



    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order : {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2 mt-3' type="text" name='name' value={user.displayName} placeholder='Enter Name' required readOnly disabled/>
                <br />
                <input className='w-100 mb-2' type="text" value={user.email} name='email' placeholder='Enter Email' readOnly disabled required />
                <br />
                <input className='w-100 mb-2' type="text" name='service' value={service.name} placeholder='Enter Service' required readOnly/>
                <br />
                <input className='w-100 mb-2' type="text" name='address' placeholder='Enter Address' required autoComplete='off'/>
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='Enter Phone' autoComplete='off' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;