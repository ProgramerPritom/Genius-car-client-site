import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer>
                <p className='text-center mt-5'><small>copyrights &copy;{new Date().getFullYear()}</small></p>
                
            </footer>
        </div>
    );
};

export default Footer;