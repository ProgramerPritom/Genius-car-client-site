import React from 'react';
import exparts1 from '../../../images/experts/expert-1.jpg';
import exparts2 from '../../../images/experts/expert-2.jpg';
import exparts3 from '../../../images/experts/expert-3.jpg';
import exparts4 from '../../../images/experts/expert-4.jpg';
import exparts5 from '../../../images/experts/expert-5.jpg';
import exparts6 from '../../../images/experts/expert-6.png';
import Expart from '../Expart/Expart';

const Exparts = () => {
    const exparts = [
        {id:1, name:'Saharuk khan', img: exparts1},
        {id:2, name:'Saharuk khan', img: exparts2},
        {id:3, name:'Saharuk khan', img: exparts3},
        {id:4, name:'Saharuk khan', img: exparts4},
        {id:5, name:'Saharuk khan', img: exparts5},
        {id:6, name:'Saharuk khan', img: exparts6}
    ]
    return (
        <div id='exparts' className='container'>
            <h2 className='text-center text-primary'>This is Exparts part</h2>
            <div className="row">
                {
                    exparts.map(expart => <Expart
                        key={expart.id}
                        expart={expart}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;