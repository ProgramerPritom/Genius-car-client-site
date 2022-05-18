import React from 'react';
import { toast } from 'react-toastify';
import useServices from '../../hooks/useServices';

const ManageService = () => {

    const [services,setServices] = useServices();

    const handleDelete = id =>{
        const confirmDlt = window.confirm('Are you want to delete');
        if (confirmDlt) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            })
        }
    }
    return (
        <div>
            <h2>Manage Service Section..</h2>
            {
                services.map(service => <div key={service._id}>

                    <h5>{service.name} <button onClick={()=> handleDelete(service._id)}>Delete</button></h5>
                    


                </div>)
            }
        </div>
    );
};

export default ManageService;