import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    THRILL
                </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
