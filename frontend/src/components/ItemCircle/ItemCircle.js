import React from 'react';

import './ItemCircle.css';

const ItemCircle = ({number}) => {
    return ( 
        <div className="circle">
            <p className="circle-text">{number}</p>
        </div>
    );
};

export default ItemCircle;
