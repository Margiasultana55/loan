import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGoogle } from 'react-icons/fa';
import './Header.css'
import useAuth from '../../hook/useAuth';
import logo from '../../img/logo.png'

const Header = () => {

    const { user, logOut, signInUsingGoole } = useAuth();
    return (
        <div>
            <>
                <Navbar variant="dark" collapseOnSelect expand="lg" className='navbar '>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="ms-3">
                        <Navbar.Brand href="/home">
                            <img
                                src={logo}
                                width="37"
                                height="37"

                                className="d-inline-block align-top ms-5"
                                alt="React Bootstrap logo"
                            />

                        </Navbar.Brand>




                        {user?.email && <Nav.Link as={Link} to="/loan" className='nav-link '
                            style={{ fontWeight: 'bold' }}>Dashboard</Nav.Link>}

                    </Navbar.Collapse>

                    <Navbar.Text>

                        {user && <span className='ms-5 text-white'> <i className="far fa-user-circle"></i> {user?.displayName}</span>}
                    </Navbar.Text>

                    {user ? <Nav.Link as={Link} to="" className='nav-link ms-3 borderr me-4' onClick={logOut}> Logout</Nav.Link> :
                        <div className='d-flex justify-content-center    '>

                            <button onClick={signInUsingGoole} className='my-btn google p-1 px-3 mt-1 mb-1 me-3'>Signin with <FaGoogle size='17px' /></button>
                        </div >
                    }



                </Navbar>

            </>
        </div>
    );
};

export default Header;