import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Onama() {
  return (
    <div className="container">

      <section className="section">
        <h1>Upoznajte GoExplore Zenica</h1>
        <p>GoExplore Zenica – vaša turistička agencija koja putovanja pretvara u uspomene.</p>
      </section>

      <section className="section">
        <h2>Naša priča</h2>
        <p>
          GoExplore Zenica je osnovana s idejom da turizam približimo svakom putniku – od onih koji žele 
          kratki vikend odmor, do onih koji maštaju o dugim putovanjima i istraživanju novih kultura. 
          Smješteni u srcu Bosne, u Zenici, razvili smo agenciju koja nudi jedinstvene aranžmane i 
          personalizovana putovanja, uz pažljivo birane destinacije.
        </p>
      </section>

      <section className="section">
        <h2>Naša misija i vizija</h2>
        <p>
          Naša <strong>misija</strong> je da putovanja učinimo dostupnima, sigurnima i inspirativnima 
          za sve generacije. Vjerujemo da svako putovanje mijenja čovjeka, otvara nova vrata i širi horizonte.
        </p>
        <p>
          Naša <strong>vizija</strong> je postati vodeća agencija u regionu koja nudi spoj domaćih i 
          međunarodnih destinacija, modernog pristupa organizaciji i tradicionalnog gostoprimstva. 
          Cilj nam je biti prvi izbor za sve koji traže sigurno, udobno i nezaboravno putovanje.
        </p>
      </section>

      <section className="section">
        <h2>Šta nudimo?</h2>
        <ul className="list">
          <li><FaCheck /> Organizovane ture i izlete u BiH</li>
          <li><FaCheck /> Aranžmane za popularne evropske destinacije</li>
          <li><FaCheck /> Vikend-putovanja i kratke city-break aranžmane</li>
          <li><FaCheck /> Personalizovane ture prema željama klijenata</li>
          <li><FaCheck /> Siguran prevoz i kvalitetan smještaj</li>
          <li><FaCheck /> Podršku i savjete prije, tokom i nakon putovanja</li>
        </ul>
      </section>

      <section className="section cards-row">
        <div className="cards">
          <h2>Aranžmani uključuju:</h2>
          <ul className="list">
            <li><FaCheck /> Organizaciju putovanja autobusom visoke turističke klase</li>
            <li><FaCheck /> Pratioca grupe i licenciranog lokalnog vodiča</li>
            <li><FaCheck /> Noćenja sa doručkom u hotelima 3*/4*</li>
            <li><FaCheck /> Obilaske gradova i kulturnih znamenitosti po programu</li>
          </ul>
        </div>

        <div className="cards">
          <h2>Aranžmani ne uključuju:</h2>
          <ul className="list">
            <li><FaTimes /> Cijenu fakultativnih izleta</li>
            <li><FaTimes /> Putničko zdravstveno osiguranje</li>
            <li><FaTimes /> Lične troškove</li>
            <li><FaTimes /> Doplatu za jednokrevetnu sobu</li>
          </ul>
        </div>
      </section>

      <section className="section cards-row">
  <div className="cards">
    <h2>Naše vrijednosti</h2>
    <ul className="list">
      <li><strong>Pouzdanost-</strong> Stojimo iza svake svoje usluge.</li>
      <li><strong>Kvalitet-</strong> Biramo provjerene hotele, partnere i vodiče.</li>
      <li><strong>Dostupnost-</strong> Putovanja za svačiji budžet.</li>
      <li><strong>Gostoprimstvo-</strong> Klijenti su uvijek na prvom mjestu.</li>
    </ul>
  </div>

  <div className="cards">
    <h2>Zašto izabrati GoExplore Zenica?</h2>
    <ol className="list">
      <li>Iskustvo i profesionalnost u organizaciji putovanja</li>
      <li>Veliki izbor destinacija i aranžmana</li>
      <li>Povoljne cijene i transparentnu uslugu</li>
      <li>Podršku 24/7 tokom putovanja</li>
      <li>Sigurnost i udobnost na svakom koraku</li>
    </ol>
  </div>
</section>


      <section className="section cards-row">
        <div className="cards">
          <h3>10+</h3>
          <p>Godina iskustva</p>
        </div>
        <div className="cards">
          <h3>5000+</h3>
          <p>Zadovoljnih putnika</p>
        </div>
        <div className="cards">
          <h3>50+</h3>
          <p>Destinacija širom svijeta</p>
        </div>
      </section>

      <section className="section">
        <blockquote>
          "Putovanje je jedino što kupiš, a čini te bogatijim."
        </blockquote>
      </section>

      <section className="section">
        <p>
          Bilo da želite otkriti skrivene ljepote Bosne i Hercegovine ili istražiti daleke destinacije, 
          GoExplore Zenica je vaš siguran partner na svakom putovanju. Naša misija je jednostavna – 
          da vaša avantura bude bez stresa, a iskustvo nezaboravno.
        </p>
        <Link to="/Ponuda"><button>ZAPOČNITE SVOJU AVANTURU</button></Link>
      </section>

    </div>
  );
}

export default Onama;
