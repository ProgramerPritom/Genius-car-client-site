import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree,setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    

    const loginNavigate = (event) => {
        navigate('/login');
    }
    if (loading) {
        return <Loading></Loading>
    }
    if(user){
        navigate('/home');
    }
    const handleSubmitRegister = event =>{
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        if (agree) {
            createUserWithEmailAndPassword(email,password);
        }
        
    }

    return (
        <div>
            <h2 className='text-center mt-4'>Register First!</h2>
            <div className="form-area">
            <Form onSubmit={handleSubmitRegister} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Full Name" required/>
            
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className={agree? 'text-primary' : 'text-danger'} onClick={()=>setAgree(!agree)} type="checkbox" name="terms" label="Accept terms and condition" />
            </Form.Group>
            <Button 
            disabled={!agree}
            variant="primary" 
            type="submit">
                Submit
            </Button>
            <p className='create-register-text text-center'>Already have account? <Link to='/login' className='text-danger' onClick={loginNavigate}>Login now</Link></p>
        </Form>
        
            </div>
        </div>
    );
};

export default Register;