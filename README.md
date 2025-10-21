**Turistička agencija GoExplore Zenica- Web aplikacija**


**Opis teme**

Ovaj projekat predstavlja web aplikaciju turističke agencije "GoExplore" smještene u Zenici.
Cilj aplikacije je omogućiti korisnicima jednostavan pregled ponuda putovanja, rezervaciju aranžmana i kontakt s agencijom.
Korisnici na stranici mogu pregledati sve dostupne destinacije zajedno sa slikama, cijenama, dostupnim terminima i kratkim opisima. Klikom na pojedinu ponudu otvara se modal s detaljnijim informacijama o odabranoj destinaciji.
Da bi izvršili rezervaciju, korisnici se moraju ulogovati – a ako nemaju nalog, mogu se registrovati putem forme za registraciju.
Aplikacija sadrži i više dodatnih stranica:
1. O nama – kratak opis agencije, njene misije i vizije, informacije o tome šta putovanja uključuju, a šta ne, te osnovne statističke brojke (broj putovanja, zadovoljnih klijenata i sl.).
2. Kontakt stranica – sadrži formu za slanje poruka, iframe s prikazom lokacije agencije, radno vrijeme, linkove ka društvenim mrežama, kao i email adresu i broj telefona.
3. Korisnici u navigaciji (navbaru) ne vide admin panel osim ako imaju administratorske privilegije.
U administrativnom panelu admin može: pregledati sve rezervacije korisnika, dodavati i brisati destinacije.
Aplikacija koristi lokalnu bazu podataka (db.json) za čuvanje informacija o korisnicima, destinacijama i rezervacijama.

**Tehnologije korištene u radu**
1. React.js (biblioteka za izradu interaktivnog korisničkog sučelja i upravljanje komponentama)
2. CSS (stiliziranje stranica i komponenti)
3. JSON (format za pohranu i razmjenu podataka; koristi se za mock podatke i rad s JSON serverom)
4. React Router (upravljanje navigacijom i više stranica unutar aplikacije bez ponovnog učitavanja)
5. JSON Server (alat za brzo postavljanje lažnog REST API-ja za razvoj i testiranje backend funkcionalnosti)
6. Node.js & npm (Node.js za pokretanje JavaScript koda lokalno, npm za instalaciju potrebnih paketa projekta).

**Opis strukture projekta**

Root:

1. src/
   
    Components (Destinace.js, Rezervacija.js, Header.js, Footer.js, pozadina.avif)
   
    Pages (AdminPanel.js, Pocetna.js, Onama.js, Login.js, Register.js, Kontakt.js, Ponuda.js, Profil.js)
2. public/
   
    images/ (slike za Ponudu i db.json)
   
    screenshots/ (snimci radne aplikacije)
   
    favicon.ico, index.html, manifest.json...
3. db.json

**Funkcionalnosti i opis dizajna**

Dizajn se temelji na modernom i responzivnom korisničkom interfejsu. Korišten je fleksibilan raspored (flex i grid layout) koji omogućava uredan prikaz elemenata na desktop i mobilnim uređajima.

Glavne funkcionalnosti:
1. Responzivni dizajn: svi elementi se automatski prilagođavaju različitim veličinama ekrana zahvaljujući kombinaciji flex i grid layouta te medijskim upitima (@media queries).
2. Navigacija: zaglavlje (header) sadrži poluprozirnu navigacijsku traku s blagim „blur“ efektom i sjenom, što doprinosi elegantnom staklastom izgledu.
3. Početna stranica: sadrži pozadinsku sliku prekrivenu tamnim „overlay“ slojem i centralno pozicioniranim naslovom, tekstom i dugmetom poziva na akciju.
4. Sekcije i kartice: svaka sekcija ima svijetlu pozadinu, zaobljene ivice, sjene i lagane animacije na hover, čime se postiže dinamičan i moderan izgled.
5. Modalni prozor: koristi poluprozirnu pozadinu i efekat zamućenja pozadine (backdrop-filter: blur) za fokusirano prikazivanje sadržaja u iskačućem prozoru.
6. Forme: polja za unos imaju zaobljene ivice, efekte fokusa i vizuelne povratne informacije pri interakciji (npr. svjetlosni efekat i promjenu boje obruba).
7. Admin panel i tabele: jednostavan, pregledan prikaz podataka s jasno definisanim zaglavljima i dugmadima u kontrastnoj plavoj boji.
8. Footer: pozicioniran na dnu stranice s bijelim tekstom i blagim gradijentnim efektom u pozadini.
9. Animacije i tranzicije: većina interaktivnih elemenata ima glatke prijelaze (transition: all 0.3s ease) za prirodan osjećaj prilikom interakcije.

Paleta boja:
1. #e96443 primarna boja (pozadinski gradijent, naslovi, dugmad, hover efekti)
2. #904e95 sekundarna boja (pozadinski gradijent, ikone, naglašeni elementi)
3. #fff (tekst i pozadine nekih sekcija)
4. #444 (tekst unutar svijetlih sekcija)
5. #0077cc (dugme na admin panelu)
6. #005fa3 (hover na dugme na admin panelu)
7. #ffff00 (boja na hover linkovima)
8. rgba(255, 255, 255, 0.08 – 0.98) (prozirni bijeli slojevi)
9. rgba(0, 0, 0, 0.08 – 0.55) (prozirni crni tonovi)
10. #f8f8f8 / #e5e5e5 / #ccc (svijetlosive nijanse za pozadine zaglavlja tabela, obrube, inpute i linije razdvajanja)

Fontovi:
1. 'Outfit',sans-serif (osnovni font za tijelo)
2. 'Syne',sans-serif (za logotip i naslove)

**Uloge korisnika** 

Postoje dvije glavne uloge korisnika: Admin i Guest. Svaka uloga ima različita prava pristupa i funkcionalnosti u aplikaciji.
1. Guest: može pregledati ponudu destinacija, može napraviti rezervaciju, može vidjeti svoje podatke na stranici profil.js, u navbaru ne vidi opciju AdminPanel pa ne može ni pristupiti toj stranici
2. Admin: u navbaru vidi opciju AdminPanel i jedini ima pristup toj stranici, ima pregled svih rezervacija korisnika, može dodavati i brisati destinacije, može vidjeti sve funckionalnosti dostupne guest korisnicima
Neprijavljeni korisnik može samo pregledati ponudu, ali ne može izvršiti rezervaciju niti pristupiti računu.

**Uputa za pokretanje projekta**
1. Klonirajte repozitorij s GitHub-a (git clone)
2. Instalirajte potrebne pakete (u cmd ili Terminalu se prebacite u folder projekta ili gdje ste klonirali repozitorij, te pokrenite instalaciju: npm install)
3. Pokrenite JSON server za backend (u cmd ili Terminalu unesite: "npx json-server --watch db.json --port 5000" i server će biti dostupan na http://localhost:5000 )
4. Pokrenite projekat u razvojnom režimu (u cmd ili Terminalu unesite "npm install", aplikacija će se otvoriti u pregledniku na adresi http://localhost:3000)

**Snimci ekrana radne aplikacije**

1. Početna stranica:
![Početna stranica](./public/screenshots/pocetna.png)
2. Ponuda:
![Ponuda](./public/screenshots/ponuda.png)
![Modal](./public/screenshots/modal.png)
3. Stranica O nama:
![O nama](./public/screenshots/onama.png)
![O nama](./public/screenshots/onama2.png)
4. Prijava:
![Prijava](./public/screenshots/login.png)
5. Registracija:
![Registracija](./public/screenshots/register.png)
6. Kontakt stranica:
![Kontakt](./public/screenshots/kontakt.png)
![Kontakt](./public/screenshots/kontakt2.png)
7. Prikaz prijavljenog korisnika:
![Račun](./public/screenshots/racun.png)
![Račun](./public/screenshots/racun2.png)
8. Admin panel - prikaz rezervacija:
![Rezervacije](./public/screenshots/rezervacije.png)
9. Admin panel - dodavanje, brisanje i prikaz destinacija:
![Destinacije](./public/screenshots/destinacije.png)
10. Izgled stranice na manjim ekranima:
![Responzivan dizajn](./public/screenshots/responzivandizajn1.png)
![Responzivan dizajn](./public/screenshots/responzivandizajn2.png)
