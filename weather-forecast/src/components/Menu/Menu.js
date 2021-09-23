import React, { Component } from "react";

import Icons from "../Icons/Icons";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

import "./Menu.scss";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar className='container' expand>
          <Nav className='mx-auto' navbar expand>
            <NavItem>
              <NavLink className='menu-item' href='/home/'>
                <Icons name='home' class='menu-home' />
              </NavLink>
            </NavItem>
            <Icons name='vector' class='menu-vector' />
            <NavItem>
              <NavLink className='menu-item' href='/city/'>
                <Icons name='shape' class='menu-shape' />
              </NavLink>
            </NavItem>
            <Icons name='vector' class='menu-vector' />
            <NavItem>
              <NavLink href='/info/'>
                <Icons name='info' class='menu-info' />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
