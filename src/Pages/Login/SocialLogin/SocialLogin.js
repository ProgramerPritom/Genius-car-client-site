import React from 'react';
import googleLogo from '../../../images/Social/google.png';
import FacebookLogo from '../../../images/Social/facebook.png';
import githubLogo from '../../../images/Social/github.png';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (user || user1) {
        navigate('/home');
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }
    return (
        <div className=''>
            <div className='d-flex align-items-center'>
                <div style={{height:"1px"}} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{height:"1px"}} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto mb-2'>
                    <img style={{width:"25px"}} className="me-3" src={googleLogo} alt="" />
                    Google Sign Up</button>
                <button className='btn btn-info w-50 d-block mx-auto mb-2'>
                    <img style={{width:"25px"}} className="me-3" src={FacebookLogo} alt="" />
                    Facebook Sign Up</button>
                <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{width:"25px"}} className="me-3" src={githubLogo} alt="" />
                    Github Sign Up</button>
            </div>
        </div>
    );
};

export default SocialLogin;