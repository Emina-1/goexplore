import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({onAdd}) {
    const[korisnik,setKorisnik]=useState({
        ime:'', email:'', lozinka:'', potvrdaLozinke:'', brojTelefona:'', datumRodjenja:'', uloga:'Guest'});
    const[obavijest,setObavijest]=useState('');
    const navigate=useNavigate();

    const handleChange = (e) => {
        setKorisnik({...korisnik, [e.target.name]: e.target.value});
    };

    const resetForm = () => {
    setKorisnik({
      ime: '', email: '', lozinka: '', potvrdaLozinke: '', brojTelefona: '', datumRodjenja: '', uloga: 'Guest'});
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const { ime, email, lozinka, potvrdaLozinke, brojTelefona, datumRodjenja, uloga } = korisnik;

        if(!ime || !email || !lozinka || !potvrdaLozinke || !brojTelefona || !datumRodjenja || !uloga) {
            setObavijest("Molimo popunite sva polja");
            return;
        }

        if(lozinka!==potvrdaLozinke) {
            setObavijest("Lozinke se ne poklapaju.");
            return;
        }

        try{
            const res=await fetch("http://localhost:5000/korisnici", {
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(korisnik)
            });
            if(!res.ok) {
                setObavijest("Greška pri registraciji, pokušajte ponovo");
                return;
            }
            if(onAdd) {onAdd(korisnik);}
            resetForm();
            setObavijest("Uspješno ste registrovani!");
            setTimeout(()=>navigate("/"), 1000);
        }
        catch(error) {
            console.error("Greška: ",error);
            setObavijest("Server trenutno nije dostupan.");
        }
    };
    return(
        <div className='form-container'>
            <h2>REGISTRACIJA</h2>
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor='ime'>Ime i prezime:</label>
                <input 
                type="text"
                name="ime"
                value={korisnik.ime}
                placeholder='Unesite ime i prezime'
                onChange={handleChange}
                />
                <label htmlFor='email'>Email:</label>
                <input 
                type="email"
                name="email"
                value={korisnik.email}
                placeholder='Unesite email adresu'
                onChange={handleChange}
                />
                <label htmlFor='lozinka'>Lozinka:</label>
                <input 
                type="password"
                name="lozinka"
                value={korisnik.lozinka}
                placeholder='Unesite lozinku'
                onChange={handleChange}
                />
                <label htmlFor='potvrdaLozinke'>Potvrda lozinke:</label>
                <input 
                type="password"
                name="potvrdaLozinke"
                value={korisnik.potvrdaLozinke}
                placeholder='Potvrdite lozinku'
                onChange={handleChange}
                />
                <label htmlFor='brojTelefona'>Broj telefona:</label>
                <input 
                type="tel"
                name="brojTelefona"
                value={korisnik.brojTelefona}
                placeholder='Unesite broj telefona'
                onChange={handleChange}
                />
                <label htmlFor='datumRodjenja'>Datum rođenja:</label>
                <input 
                type="date"
                name="datumRodjenja"
                value={korisnik.datumRodjenja}
                onChange={handleChange}
                />
                <label htmlFor='uloga'>Uloga:</label>
                <select 
                name="uloga"
                value={korisnik.uloga}
                onChange={handleChange}>
                    <option value="Admin">Admin</option>
                    <option value="Guest">Guest</option>
                </select>
                <button type="submit">Registruj se</button>
                {obavijest && <p>{obavijest}</p>}
            </form>
        </div>
        
    );
}

export default Register;
