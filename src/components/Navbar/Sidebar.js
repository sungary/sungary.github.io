import React from 'react';
import {NavLink} from './NavbarElements';
import { slide as Menu } from 'react-burger-menu';
import "./Sidebar.css";

const Sidebar = () => {
    return (
      <Menu right>
        <NavLink to='/' >
          Home
        </NavLink>
        <NavLink to='/Projects' >
          Projects
        </NavLink>
        <NavLink as="a" href="https://github.com/sungary" rel="noreferrer" target="_blank">
          GitHub
        </NavLink>
      </Menu>
    );
  };

  export default Sidebar;