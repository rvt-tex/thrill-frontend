import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


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
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/tours' className='nav-links' onClick={closeMobileMenu}>Tours</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Galleries' className='nav-links' onClick={closeMobileMenu}>Galleries</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Reservations' className='nav-links' onClick={closeMobileMenu}>Reservations</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Reviews' className='nav-links' onClick={closeMobileMenu}>Reviews</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Profile' className='nav-links' onClick={closeMobileMenu}>Profile</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
