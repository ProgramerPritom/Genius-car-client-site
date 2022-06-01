import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );
      
      let errorElement;
      if (loading ||sending) {
        return <Loading></Loading>
    }

      let from = location.state?.from?.pathname || "/";

      if (user) {
        // navigate(from, { replace: true });
      }

      if (error) {
          errorElement = <p className='text-danger'>Error: {error.message}</p>
      }

    const handleSubmit = async event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password);
       await signInWithEmailAndPassword(email,password);
       const {data} = await axios.post('http://localhost:5000/login',{email});
       localStorage.setItem('accessToken' , data.accessToken);
       navigate(from, { replace: true });
    };

    const registerNavigate = event => {
        navigate('/register');
    }
    const forgetPasswordHandle = async() =>{
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
        toast('Sent email in inbox');
        }
        else{
            toast('Please Enter your Email');
        }
    }

    return (
        <div className='login-area'>
            <h2 className='login-title text-center mt-3'>Please Login</h2>
            <div className="form-area">
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
            </Form.Group>
            
            {errorElement}
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <p className='create-register-text text-center'>New at Genius car? <span className='text-danger' onClick={registerNavigate}>Create Account now</span></p>
            <p className='create-register-text text-center'>Forget password? <button className='text-danger btn btn-link' onClick={forgetPasswordHandle}>Get password</button></p>
            <SocialLogin></SocialLogin>
            
        </Form>
        
            </div>
            
        
        </div>
    );
};

export default Login;