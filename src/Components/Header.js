import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
    const user=JSON.parse(localStorage.getItem("user"));
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return(
        <header className={`header ${isHomePage ? "header-home" : ""}`}>
            <h2 className='logo'>GoExplore<br/>Zenica</h2>
            
            <nav className='navbar'>
                {user?.uloga==="Admin" && (
                    <Link to="/AdminPanel">Admin panel</Link>
                )}
                <Link to="/">Početna</Link>
                <Link to="/Onama">O nama</Link>
                <Link to="/Login">Prijava</Link>
                <Link to="/Kontakt">Kontakt</Link>
                <Link to="/Profil"><FaUserCircle/></Link>
            </nav> 
        </header>
    );
}
export default Header;