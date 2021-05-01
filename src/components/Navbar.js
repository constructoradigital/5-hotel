import React from 'react'
import styled, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import {FaBars} from 'react-icons/fa'

const Nav = styled.nav`
    height: 60px;
    display:flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index:100;
    position: fixed;
    width:100%;
  
`

const NavLink = css`
    color:#fff;
    display:flex;
    align-items: center;
    padding: 0 1rem;
    cursor:pointer;
    text-decoration:none;
`

const Logo= styled(Link)`
    ${NavLink}
    font-style:italic;
    font-weight: bold;
`

const MenuBars=styled(FaBars)`
    display:none;

    @media screen and (max-width: 768px){
        display:block;
        height: 35px;
        width:35px;
        cursor:pointer;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-50%, 25$);
        color:white;
        margin: 10px;
 
    }
`

const NavMenu =styled.div`
    display: flex;
    align-items:center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display:none;
    }

`

const NavMenuLinks= styled(Link)`
    ${NavLink}

`

const NavBtn = styled.div`
    display:flex;
    align-items:center;
    margin-right:24px;
    @media screen and (max-width: 768px){
        display:none;
    }
`

export const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo to="/">ITECEL</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary='true' > Contact Us</Button>
            </NavBtn>

        </Nav>
    )
}
