import React, {useState, useEffect} from 'react';

function Rezervacija() {
    const[rezervacije,setRezervacije]=useState([]);
    const[obavijest,setObavijest]=useState('');

    useEffect(()=>{
        const fetchRezervacije=async()=>{
            try{
                const res=await fetch("http://localhost:5000/rezervacije");
                if(!res.ok) {
                    setObavijest("Greška pri učitavanju rezervacija.");
                    return;
                }
                const data=await res.json();
                setRezervacije(data);
            }
            catch(error) {
                console.error("Greška: ",error);
                setObavijest("Server trenutno nije dostupan.");
            }
        };
        fetchRezervacije();
    }, []);

    return(
            <div className="rezervacija">
            {rezervacije.length===0 ? (
                <p>Nema rezervacija.</p>
            ):(
                <table>
                    <thead>
                        <tr>
                            <th>Korisnik</th>
                            <th>Email</th>
                            <th>Destinacija</th>
                            <th>Termin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rezervacije.map((r,index)=>(
                            <tr key={index}>
                                <td>{r.korisnik?.ime}</td>
                                <td>{r.korisnik?.email}</td>
                                <td>{r.destinacija?.naziv}</td>
                                <td>{r.termin}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            </div>
    );
}
export default Rezervacija;