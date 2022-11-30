import React from 'react';
import {Nav, NavLink, Bars, NavMenu} from './NavbarElements';
import "./index.css";

const Navbar = () => {
    return (
        <>
            <Nav>
                <div className="myname">
                    Test Name
                </div>

                <Bars>
                </Bars>

                <NavMenu>
                    <NavLink to='/' >
                        Home
                    </NavLink>
                    <NavLink to='/PageTest' >
                        PageTest
                    </NavLink>
                    <NavLink as="a" href="https://github.com/sungary" rel="noreferrer" target="_blank">
                        GitHub
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;