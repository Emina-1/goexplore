import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Pocetna from './Pages/Pocetna';
import Onama from './Pages/Onama';
import Login from './Pages/Login';
import Kontakt from './Pages/Kontakt';
import Ponuda from './Pages/Ponuda';
import Register from './Pages/Register';
import AdminPanel from './Pages/AdminPanel';
import Rezervacija from './Components/Rezervacija';
import Destinacije from './Components/Destinacije';
import Profil from './Pages/Profil';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      {/* Glavni omotač koji tvoj CSS koristi */}
      <div className="homepage">
        <Header />

        {/* Wrapper koji drži glavni sadržaj (između headera i footera) */}
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Pocetna />} />
            <Route path="/Login" element={<Login setUser={setUser} />} />
            <Route path="/Kontakt" element={<Kontakt />} />
            <Route path="/Onama" element={<Onama />} />
            <Route path="/Ponuda" element={<Ponuda />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/AdminPanel" element={<AdminPanel />} />
            <Route path="/Rezervacija" element={<Rezervacija />} />
            <Route path="/Destinacije" element={<Destinacije />} />
            <Route path="/Profil" element={<Profil />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
