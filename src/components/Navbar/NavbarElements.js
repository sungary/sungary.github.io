import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: white;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
  
export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-contents: center;
  text-decoration: none;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: .25rem;
  padding-bottom: .25rem;
  &.active {
    color: black;
  }
  font-weight: bold;
  font-size: large;
  @media screen and (max-width: 710px) {
    display: none;
  }

`;

export const Bars = styled(FaBars)`
  display: none;
  color: black;
  @media screen and (max-width: 720px) {
    display: block;
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    font-size: x-large;
    cursor: pointer;
  }
`;
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  white-space: nowrap;
  padding-top: 1.1rem;
  padding-bottom: 1rem;
  right: 5rem;
`;