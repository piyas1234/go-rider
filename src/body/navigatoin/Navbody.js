import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import NavProfile from './NavProfile'

const Navbody = () => {
    const [inputData, setinputData] = useContext(UserContext);
    const { email, emailVerified, displayName } = inputData;
    const shortName = displayName ? displayName.slice(0, 5) : "";
    const location = useLocation();
    const pathbg = location.pathname=="/" || location.pathname =="/destination" || location.pathname =="/about" ?"#B5EAF8":location.pathname =="/map"?"#75CFF0":"white";
    const navBarStyle = { backgroundColor: pathbg, fontFamily: "'Poppins', sans-serif" };
    const navStyle = { boxShadow: "3px 3px 3px 3px  gray" };
    const navStylebtn = { boxShadow: "3px 3px 3px 3px  gray", backgroundColor: "tomato" };
    const classNameValue = "bg-primary text-white p-2";
     
     
    return (
        <div>
            <Navbar className="p-3" style={navBarStyle} bg="" expand="lg">
                <Navbar.Brand><h3><Link className={classNameValue} style={navStyle} to="/"> <FontAwesomeIcon className="text-white" size="1x" icon={faBiking} />{" "}Go Riders</Link></h3></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><Link to="/"><h5 className={classNameValue} style={navStyle}>Home</h5></Link></Nav.Link>
                        <Nav.Link><Link to="/destination"><h5 className={classNameValue} style={navStyle} >Destination</h5></Link></Nav.Link>
                        <Nav.Link><Link to="/about"><h5 className={classNameValue} style={navStyle} >About</h5></Link></Nav.Link>
                        <Nav.Link><Link to="/blog"><h5 className={classNameValue} style={navStyle} >Blog</h5></Link></Nav.Link>
                        <Nav.Link><Link to="/map"><h5 className={classNameValue} style={navStyle} >Map</h5></Link></Nav.Link>

                        {email || displayName || emailVerified ?
                            <><Nav.Link><h5 className={classNameValue} style={navStyle}>{shortName}</h5></Nav.Link> <Nav.Link  ><NavProfile setinputData={setinputData} value={inputData} ></NavProfile></Nav.Link> </> :
                            <><Nav.Link><Link to="/login"><h5 style={navStylebtn} className="text-white btn">Login</h5></Link></Nav.Link>
                                <Nav.Link ><NavProfile setinputData={setinputData} value={inputData} ></NavProfile></Nav.Link>
                            </>}

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navbody;