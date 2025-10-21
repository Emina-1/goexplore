import React from 'react';
import {Link} from 'react-router-dom';

function Pocetna() {
   

  return (
      <div className='pocetna'>
        <div className='overlay'>
        <h1>Dobrodošli u GoExplore Zenica</h1>
        <p>Vaša sljedeća destinacija počinje ovdje – uživajte u svakom trenutku putovanja!</p>
        <h3><Link to="/Ponuda"><button>AKTUELNA PONUDA</button></Link></h3>
        </div>
      </div>
  );
}

export default Pocetna;
