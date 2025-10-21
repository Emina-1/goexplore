import React, {useState, useEffect} from 'react';

function Destinacije() {
    const[destinacije,setDestinacije]=useState([]);
    const[obavijest,setObavijest]=useState('');
    const[novaDestinacija,setNovaDestinacija]=useState({
        naziv:'',
        opis:'',
        cijena:'',
        trajanje:'',
        slika:'',
        dostupni_termini: []
    });
    const [terminiInput, setTerminiInput]=useState('');

    const handleChange=(e)=>{
    const {name, value}=e.target;
    setNovaDestinacija({ ...novaDestinacija, [name]:value });
    };

   useEffect(()=>{
           const fetchDestinacije=async()=>{
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
       }, []);

    const dodajDestinaciju=async(e)=>{
        e.preventDefault();
        const terminiArray = terminiInput
        .split(',')
        .map(t => t.trim())
        .filter(t => t !== '');

    const destinacijaZaSlanje = {
      ...novaDestinacija,
      dostupni_termini: terminiArray
    };

        try{
            const res=await fetch("http://localhost:5000/destinacije", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(novaDestinacija),
            });
            const data=await res.json();
            setDestinacije([...destinacije,data]);
            setNovaDestinacija({
                naziv:'',
                opis:'',
                cijena:'',
                trajanje:'',
                slika:'',
                dostupni_termini: []
            });
            setObavijest("Destinacija dodana.");
        }
        catch(error) {
            console.error("Greška: ",error);
            setObavijest("Server nije dostupan.");
        }
    };

    const obrisiDestinaciju=async(id)=>{
        try{
            await fetch(`http://localhost:5000/destinacije/${id}`, {
                method:"DELETE"
            })
            setDestinacije(destinacije.filter((d)=>d.id!==id)); 
            setObavijest("Destinacija obrisana.");
        }
        catch(error) {
            console.error("Greška: ",error);
        }
    };

    return(
        <div className='destinacije'>
            <form onSubmit={dodajDestinaciju}>
                <input
                    type="text"
                    name="naziv"
                    value={novaDestinacija.naziv}
                    placeholder='Naziv destinacije'
                    onChange={handleChange}
                    required/>
                <input
                    type="text"
                    name="opis"
                    value={novaDestinacija.opis}
                    placeholder='Opis'
                    onChange={handleChange}
                    required/>
                <input
                    type="text"
                    name="cijena"
                    value={novaDestinacija.cijena}
                    placeholder='Cijena'
                    onChange={handleChange}
                    required/>
                <input
                    type="text"
                    name="trajanje"
                    value={novaDestinacija.trajanje}
                    onChange={handleChange}
                    placeholder='Trajanje'
                    required/>
                <input
                    type="text"
                    name="slika"
                    value={novaDestinacija.slika}
                    onChange={handleChange}
                    placeholder='Slika'
                    required/>
                <input
                    type="text"
                    value={terminiInput}
                    onChange={(e) => setTerminiInput(e.target.value)}
                    placeholder='Dostupni termini (npr. 11/10 - 15/10, 30/11 - 04/12)'
                />
                <button type="submit">Dodaj destinaciju</button>
            </form>
            {obavijest && <p>{obavijest}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Naziv destinacije</th>
                        <th>Opis</th>
                        <th>Cijena</th>
                        <th>Trajanje</th>
                        <th>Slika</th>
                        <th>Dostupni termini</th>
                    </tr>
                </thead>
                <tbody>
                    {destinacije.map((d)=>(
                        <tr key={d.id}>
                            <td>{d.naziv}</td>
                            <td>{d.opis}</td>
                            <td>{d.cijena}</td>
                            <td>{d.trajanje}</td>
                            <td>{d.slika}</td>
                            <td>
                                {d.dostupni_termini && d.dostupni_termini.length > 0
                                    ? d.dostupni_termini.join(', ')
                                    : 'Nema termina'}
                            </td>
                            <td><button onClick={()=>obrisiDestinaciju(d.id)}>Obriši</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Destinacije;