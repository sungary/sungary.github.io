import React from 'react';
import {Nav, NavLink, NavMenu} from './NavbarElements';
import "./index.css";
import Sidebar from './Sidebar';

const Navbar = () => {
    return (
        <>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <Nav>
                <div className="myname">
                    Test Name
                </div>
                
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