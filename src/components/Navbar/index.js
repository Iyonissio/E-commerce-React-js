import React from 'react';
import { Nav, NavIcon, NavLink, Bars } from './NavbarElements';
import { FaFire } from 'react-icons/fa';

const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
            <NavLink to='/'> Hut <FaFire rel="noopener noreferrer"/> </NavLink>
            <NavIcon onClick={toggle}>
                <p>Menu</p>
            <Bars/>
            </NavIcon>
           </Nav> 
        </>
    );
};

export default Navbar;