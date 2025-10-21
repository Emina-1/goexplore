import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Ponuda() {
    const [destinacije, setDestinacije] = useState([]);
    const [obavijest, setObavijest] = useState('');
    const [odabrana, setOdabrana] = useState(null);
    const [termin, setTermin] = useState('');
    const [showScroll, setShowScroll] = useState(false);
    const user = JSON.parse(localStorage.getItem("user")); 

    useEffect(() => {
        const fetchDestinacije = async () => {
            try {
                const res = await fetch("http://localhost:5000/destinacije");
                if (!res.ok) {
                    setObavijest("Greška pri učitavanju destinacija.");
                    return;
                }
                const data = await res.json();
                setDestinacije(data);
            } catch (error) {
                setObavijest("Server nije dostupan.");
            }
        };
        fetchDestinacije();
        const handleScroll = () => {
            setShowScroll(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    

    const handleModalClick = (e) => e.stopPropagation();

    const handleRezervacija = () => {
        if (!user) {
            alert("Morate biti ulogovani za rezervaciju.");
            return;
        }
        if (!termin) {
            alert("Molimo odaberite termin.");
            return;
        }

        const rezervacija = {
            korisnik: user,
            destinacija: { id: odabrana.id, naziv: odabrana.naziv },
            termin
        };

        console.log("Rezervacija poslana:", rezervacija);

        fetch('http://localhost:5000/rezervacije', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rezervacija)
        })
        .then(res => {
            if (!res.ok) throw new Error("Greška pri slanju rezervacije.");
            return res.json();
        })
        .then(data => {
            alert(`Rezervacija poslana! Javit ćemo se putem emaila.`);
            setOdabrana(null); 
            setTermin(''); 
        })
        .catch(err => {
            console.error(err);
            alert("Došlo je do greške, pokušajte ponovo.");
        });
    };
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    return (
        <div className='ponuda'>
            <h2>Aktuelna ponuda</h2>
            {obavijest && <p>{obavijest}</p>} 

            <ul className='grid-container'>
                {destinacije.map((k) => (
                    <li key={k.id} className='card'>
                        <h2>{k.naziv}</h2>
                        <img src={`images/${k.slika}`} alt={k.naziv} />
                        <h3>{k.trajanje} - {k.cijena}</h3>
                        <button onClick={() => setOdabrana(k)}>Saznaj više</button>
                    </li>
                ))}
            </ul>

            {odabrana && (
                <div className='modal-overlay' onClick={() => setOdabrana(null)}>
                    <div className='modal-content' onClick={handleModalClick}>
                        <h2>{odabrana.naziv}</h2>
                        <p className="white-space-pre-line">{odabrana.opis}</p>
                        <h3>Cijena: {odabrana.cijena} - {odabrana.trajanje}</h3>

                        {odabrana.dostupni_termini?.length > 0 && (
                            <div className='termini'>
                                <label>Odaberite termin: </label>
                                <select
                                    value={termin}
                                    onChange={(e) => setTermin(e.target.value)}
                                    style={{ marginLeft: '10px' }}
                                >
                                    <option value="">-- odaberite --</option>
                                    {odabrana.dostupni_termini.map((t, index) => (
                                        <option key={index} value={t}>{t}</option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <button
                            onClick={handleRezervacija}
                            disabled={!termin}
                        >
                            Rezerviši
                        </button>

                        <button onClick={() => { setOdabrana(null); setTermin(''); }} 
                                className='button-close' >
                            Zatvori
                        </button>
                    </div>
                </div>
            )}
             {showScroll && (
                <button 
                    onClick={scrollToTop} 
                    className="scroll-to-top"
                    
                >⬆</button>
            )}
        </div>
    );
}

export default Ponuda;
