import React from 'react';

const Expart = (props) => {
    const {name,img} = props.expart;
    return (
       
            <div className='gx-5 gy-4 col-sm-12 col-md-6 col-lg-4'>
                <div class="card " style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
        
    );
};

export default Expart;