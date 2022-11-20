import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to='/' >
                        Home
                    </NavLink>
                    <NavLink to='/PageTest' >
                        PageTest
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;