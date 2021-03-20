import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import NavProfile from './NavProfile'

const Navbody = () => {
    const [inputData, setinputData] = useContext(UserContext)
    const { email ,displayName} = inputData;

    console.log(inputData)
    return (
        <div>
            <Navbar className="p-3" style={{ backgroundColor: "#B5EAF8",fontFamily: "'Poppins', sans-serif" }} bg="" expand="lg">
                <Navbar.Brand><h3><Link className="bg-primary text-white p-1" style={{ boxShadow: "3px 3px 3px 3px  gray" }} to="/"> <FontAwesomeIcon className="text-white" size="1x" icon={faBiking} />{" "}Go Riders</Link></h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><Link style={{ textDecoration: 'none' }} to="/"><h5 className="text-dark">Home</h5></Link></Nav.Link>
                        <Nav.Link><Link style={{ textDecoration: 'none' }} to="/destination"><h5 className="text-dark">Destination</h5></Link></Nav.Link>
                        <Nav.Link><Link style={{ textDecoration: 'none' }} to="/about"><h5 className="text-dark">About</h5></Link></Nav.Link>
                        <Nav.Link><Link style={{ textDecoration: 'none' }} to="/blog"><h5 className="text-dark">Blog</h5></Link></Nav.Link>
                        {email || displayName ? <Nav.Link  ><NavProfile setinputData={setinputData} value={inputData} ></NavProfile></Nav.Link> :
                            <><Nav.Link><Link style={{ textDecoration: 'none' }} to="/login"><h5 style={{ backgroundColor: "tomato" }} className="text-white btn">Login</h5></Link></Nav.Link>
                                <Nav.Link ><NavProfile setinputData={setinputData} value={inputData} ></NavProfile></Nav.Link>
                            </>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navbody;