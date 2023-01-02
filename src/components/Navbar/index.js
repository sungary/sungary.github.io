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
                    Gary Sun
                </div>
                
                <NavMenu>
                    <NavLink to='/' >
                        Home
                    </NavLink>
                    <NavLink to='/Projects' >
                        Projects
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