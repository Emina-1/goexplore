import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Profil() {
    const user=JSON.parse(localStorage.getItem("user"));

    const logout=()=>{
        localStorage.removeItem("user");
        window.location.reload();
    }

    if(!user) {
        return(
            <div className='not-logged-in'>
                <h2>Niste prijavljeni</h2>
                <p>Molimo vas da se <Link to="/Login">prijavite</Link> ili <Link to="/Register"> registrujete.</Link></p>
            </div>
        );
    }

    return(
        <div className='profil'>
            <h2>Vaš račun</h2>
            <table className="profil-table">
                <tbody>
                    <tr>
                        <td>Ime i prezime:</td>
                        <td>{user.ime}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Broj telefona:</td>
                        <td>{user.brojTelefona}</td>
                    </tr>
                    <tr>
                        <td>Datum rođenja:</td>
                        <td>{user.datumRodjenja}</td>
                    </tr>
                    <tr>
                        <td>Uloga:</td>
                        <td>{user.uloga}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={logout}>Odjavi se</button>
        </div>
    );
}
export default Profil;