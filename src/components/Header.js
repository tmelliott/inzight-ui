import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';
import { Nav, Navbar, Dropdown } from 'rsuite';

export const Header = () => {
    return (
        <div className="header">
            <Navbar>
                <Navbar.Body>
                    <Nav>
                        <Dropdown title="File">
                            <Dropdown.Item>Import</Dropdown.Item>
                            <Dropdown.Item>Export</Dropdown.Item>
                            <Dropdown.Item>Quit</Dropdown.Item>
                        </Dropdown>
                        <Nav.Item>Dataset</Nav.Item>
                        <Nav.Item>Variables</Nav.Item>
                        <Nav.Item>Advanced</Nav.Item>
                        <Nav.Item>Help</Nav.Item>
                    </Nav>
                    <Nav pullRight>
                        <Nav.Item className="logo__container">
                            <img src={logo} alt="" class="navlogo"/>
                        </Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        </div>
    )
}

export default Header
