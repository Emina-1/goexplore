import React from 'react';
import Rezervacija from '../Components/Rezervacija';
import Destinacije from '../Components/Destinacije';
function AdminPanel() {

    return(
        <div className='admin-panel'>
            <h2>Pregled svih rezervacija</h2>
            <Rezervacija/>
            <h2>Upravljanje destinacijama</h2>
            <Destinacije/>
        </div>
    );
}
export default AdminPanel;