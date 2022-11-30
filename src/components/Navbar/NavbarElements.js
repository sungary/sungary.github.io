import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: #e6f7ff;
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  font-weight: bold;
  font-size: large;
  @media screen and (max-width: 720px) {
    display: none;
  }
  border: 1px solid black;
  justify-content: space-between;
`;
  
export const Bars = styled(FaBars)`
  display: none;
  color: #000000;
  @media screen and (max-width: 720px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  right: 5rem;
  margin-right: -24px;
  white-space: nowrap;
`;