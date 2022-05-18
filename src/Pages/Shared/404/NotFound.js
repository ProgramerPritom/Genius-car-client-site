import React from 'react';
import notFoundImg from '../../../images/404.png';
import './NotFound.css'; 

const NotFound = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className='not-found-img text-center mt-5' src={notFoundImg} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h2 className='mt-5'>Page Not Found</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;