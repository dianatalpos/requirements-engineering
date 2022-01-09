import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='primary' className='text-white text-center text-lg-left'>
            <MDBContainer className='p-4'>
                <MDBRow>
                    <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Description</h5>

                        <p>
                            This is a prototype for the internship app. This is the property
                            of the company and should not be used for commercial purposes.
                        </p>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Useful links</h5>

                        <ul className='list-unstyled mb-0'>
                            <li>
                                <a href='/' className='text-white'>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href='/signup' className='text-white'>
                                    Register
                                </a>
                            </li>
                            <li>
                                <a href='/login' className='text-white'>
                                    Login
                                </a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-white' href='https://prototype.itnernshipapp.com/'>
                    https://prototype.itnernshipapp.com
                </a>
            </div>
        </MDBFooter>
    );
}