import React, {useState} from 'react';
import { useNavigate, Link} from 'react-router-dom';

function Login({setUser}) {
  const[email,setEmail]=useState('');
  const[lozinka,setLozinka]=useState('');
  const[obavijest,setObavijest]=useState('');
  const navigate=useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(!email || !lozinka) { 
      setObavijest("Molimo popunite sva polja.");
      return; }
      
    try{
      const res=await fetch("http://localhost:5000/korisnici");
      if(!res.ok) {
        setObavijest("Greška pri dohvaćanju korisnika");
        return;
      }
      const korisnici=await res.json();
      const nadjen=korisnici.find( (k) => k.email===email && k.lozinka===lozinka);
      if(nadjen) {
        const prijavljeni={
          ime:nadjen.ime, 
          email:nadjen.email, 
          uloga:nadjen.uloga, 
          brojTelefona:nadjen.brojTelefona,
          datumRodjenja:nadjen.datumRodjenja,
          lozinka:nadjen.lozinka};
        setUser(prijavljeni);
        localStorage.setItem("user", JSON.stringify(prijavljeni));
        setObavijest("Uspješno ste prijavljeni!");
        navigate("/");
      } else {
        setObavijest("Račun nije pronađen, molimo registrujte se:");
        setTimeout(()=>navigate("/Register"), 1500);
      }
    }
    catch(error) {
      console.error("Greška: ",error);
      setObavijest("Server trenutno nije dostupan.");
    }
  };
  return(
    <div className='form-container'>
      <h2>PRIJAVA</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input
        type="email"
        name="email"
        value={email}
        placeholder='Unesite vašu email adresu'
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input
        type="password"
        name="lozinka"
        value={lozinka}
        placeholder='Unesite lozinku'
        onChange={(e)=>setLozinka(e.target.value)}
        />
        <button type="submit">Prijavi se</button>
        {obavijest && <p>{obavijest}</p>}
        <p>Nemate račun?<Link to="/Register">Registrujte se ovdje.</Link></p>
      </form>
    </div>
  );
}
export default Login;