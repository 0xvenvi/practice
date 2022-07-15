import React from 'react';
import './styles/header.css'

const Header = () => {

    return(
        <div className="header">
            <img className='header-logo' src="https://s.clipartkey.com/mpngs/s/45-450949_bakery-logo-vector-png.png" alt="bakery-logo"/>
            <h1>My Bakery Catalog</h1>
            <h2 className='admin-center-link'>Admin Center</h2>
        </div>
    )



}

export default Header;