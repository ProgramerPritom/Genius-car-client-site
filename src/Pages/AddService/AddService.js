import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    
    const url = 'http://localhost:5000/service';
    fetch(url,{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => res.JSON())
    .then(result => console.log(result));
  
  };
    return (
        <div className='w-50 mx-auto'>
            <h2>Please add service!!!</h2>
            
      <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2' placeholder='Service Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-2' placeholder=' Service Description' {...register("description", )} />
      <input className='mb-2' placeholder='Price' type="number" {...register("price", )} />
      <input className='mb-2' placeholder='Photo Url' type="text" {...register("img", )} />
      <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;