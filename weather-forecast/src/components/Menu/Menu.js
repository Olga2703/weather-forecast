import React, { Component } from 'react';

import Icons from '../Icons/Icons';
import { Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText } from 'reactstrap';

import './Menu.scss';

export default class Menu extends Component {

    render() {
        return (
            <div className="navbar">
                <Navbar>
                    <Nav>
                        <NavItem>
                            <NavLink href='/Home'>
                                <Icons name='home'/>                                
                            </NavLink>
                        </NavItem>                        
                        <NavItem>
                            <NavLink href='/History'><Icons name='shape'/></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/Info'><Icons name='info'/></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

