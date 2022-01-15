import React, { useEffect, useRef } from 'react'
import {Link, useLocation} from "react-router-dom";

export default function Navbar(props) {
    let location = useLocation();
    useEffect( () => {},[location]);
    const burgerRef = useRef(null);
    const navbarRef = useRef(null);
    const navContentRef = useRef(null);
    const navContentRef2 = useRef(null);
    const navContentRef3 = useRef(null);
    function showNavbar() {
        navbarRef.current.classList.toggle('nav-height');
        navContentRef.current.classList.toggle('visibility-class');
        navContentRef2.current.classList.toggle('visibility-class');
        navContentRef3.current.classList.toggle('visibility-class');
    }
    return (
        <>
            <nav className={`navbar nav-height `} ref={navbarRef}>
                <div className="logo visibility-class" ref={navContentRef}></div>
                <h2 className="visibility-class" ref={navContentRef2}>Worlds Seven Continents</h2>
                <ul className="nav-ul visibility-class" ref={navContentRef3}>
                    <li className="nav-wonders">
                        <Link className={location.pathname === "/" ? "active" : ""} to="/">Home</Link>
                    </li>
                    <li className="nav-wonders">
                        <Link className={location.pathname === "/asia" ? "active" : ""} to="/asia">Asia </Link>
                    </li>
                    <li className="nav-wonders">
                        <Link className={location.pathname === "/europe" ? "active" : ""} to="/europe">Europe </Link>
                    </li>
                    <li className="nav-wonders">
                        <Link className={location.pathname === "/southAmerica" ? "active" : ""} to="/southAmerica">South America </Link>
                    </li>
                    <li className="nav-wonders">
                        <Link className={location.pathname === "/northAmerica" ? "active" : ""} to="/northAmerica">North America </Link>
                    </li>
                    <li className="nav-wonders">
                        <Link className={location.pathname === "/australia" ? "active" : ""} to="/australia">Australia </Link>
                    </li>
                    <li className="nav-wonders">
                        <Link className={location.pathname === "/africa" ? "active" : ""} to="/africa">Africa </Link>
                    </li>
                    <li className="nav-wonders">
                        <Link className={location.pathname === "/antarctica" ? "active" : ""} to="/antarctica">Antarctica </Link>
                    </li>
                </ul>
                <div className="burger" ref={burgerRef} onClick={showNavbar}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </nav>
        </>
    )
}
