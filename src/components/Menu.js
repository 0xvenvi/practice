import React from 'react';
import './styles/menu.css';

const Menu = (props) => {


    return(
        <div className='menu-item'>
            <img src={props.image} alt="image"/>
            <span>ID: {props.id}</span>
            <span>Category: {props.category}</span>
            <span>Name: {props.name}</span>
            <span>Price: {props.price}</span>
            <button>Add to Cart</button>
            
        </div>

    )
}


export default Menu;