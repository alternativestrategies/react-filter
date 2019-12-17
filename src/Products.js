import React from 'react';

const Products = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
        <p>{props.price}</p>
        </div>
    )
}

export default Products;