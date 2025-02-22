import React, {useState, useEffect} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom';

import image from '../logo/sword-spade-large.png';
import '../styling/header.css';

function Header() {
    const [activeLink, setActiveLink] = useState('/');

    const { pathname, hash, key } = useLocation();
    useEffect(() => {
        if (hash) {
            setActiveLink(pathname + hash);
        }
        else {
            setActiveLink(pathname);
        }
    }, [pathname, hash, key]);
    console.log(activeLink);
    
    return(
        <div className='header-wrapper'>
            <div className='navlink-wrapper'>
                <div className='navlink-container-left'>
                    <Link to='/' className={'header-link ' + (activeLink === '/' ? 'current' : '')}>Home</Link>
                    <Link to='/#projects' className={'header-link ' + (activeLink === '/#projects' ? 'current' : '')}>Projects</Link>
                </div>
                <div className='navlink-container-right'>
                    <Link to='about' className={'header-link ' + (activeLink === '/about' ? 'current' : '')}>About Me</Link>
                    <Link to='resume' className={'header-link ' + (activeLink === '/resume' ? 'current' : '')}>Résumé</Link>
                </div>
            </div>
            <div className='logo-container'>
                <img src={image} alt="Logo" className='logo-image'/>
            </div>
        </div>
    );
}

export default Header;