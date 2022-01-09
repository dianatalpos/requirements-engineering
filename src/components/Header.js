import {Button} from "react-bootstrap";
import React from "react";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon } from 'mdb-react-ui-kit';

export default function Header(){
    return (
        <header>
            <MDBNavbar expand='lg' light bgColor='bg-light'>
                <MDBContainer fluid>
                    <MDBNavbarToggler
                        aria-controls='navbarExample01'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <MDBIcon fas icon='bars' />
                    </MDBNavbarToggler>
                    <div className='collapse navbar-collapse bg-light' id='navbarExample01'>
                        <MDBNavbarNav right className='mb-2 mb-lg-0'>
                            <MDBNavbarItem active>
                                <MDBNavbarLink aria-current='page' href='/'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/features'>Features</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/pricing'>Pricing</MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='/about'>About</MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </div>
                </MDBContainer>
            </MDBNavbar>

            <div className='p-5 text-center bg-light'>
                <h1 className='mb-3'>Internship app</h1>
                <h4 className='mb-3'>Prototype</h4>
                <a className='btn btn-primary' href='/login' role='button'>
                    Login
                </a>
            </div>
        </header>
    )
}