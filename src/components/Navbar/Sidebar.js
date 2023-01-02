import React, {useState} from 'react';
import {NavLink} from './NavbarElements';
import { slide as Menu } from 'react-burger-menu';
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
      setOpen(!isOpen)
    }

    const closeSideBar = () => {
      setOpen(false)
    }

    return (
      <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
        <NavLink to='/' onClick={closeSideBar}>
          Home
        </NavLink>
        <NavLink to='/Projects' onClick={closeSideBar}>
          Projects
        </NavLink>
        <NavLink as="a" href="https://github.com/sungary" rel="noreferrer" target="_blank" onClick={closeSideBar}>
          GitHub
        </NavLink>
      </Menu>
    );
  };

  export default Sidebar;