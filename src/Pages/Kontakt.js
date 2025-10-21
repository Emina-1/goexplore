import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaClock } from 'react-icons/fa';


function Kontakt() {
  const [forma, setForma] = useState({
    ime: '',
    email: '',
    poruka: ''
  });

  const [obavijest, setObavijest] = useState(''); 
  const handleChange = e => {
    setForma({ ...forma, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Poruka poslana:', forma);
    setObavijest('Poruka je uspješno poslana!');
    setForma({ ime: '', email: '', poruka: '' });
  };

  return (
    <div className="form-container">
      <h2>KONTAKTIRAJTE NAS</h2>

      <h3>Pošaljite nam poruku:</h3>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          name="ime"
          placeholder="Vaše ime i prezime"
          value={forma.ime}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Vaša email adresa"
          value={forma.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="poruka"
          placeholder="Vaša poruka"
          value={forma.poruka}
          onChange={handleChange}
          rows="5"
          required
        />
        <button type="submit">Pošalji</button>
      </form>
      {obavijest && <p className="obavijest">{obavijest}</p>} 

    <div className='lokacija'>
      <h3>Posjetite nas na lokaciji:</h3>
        <p><FaMapMarkerAlt/>Bulevar Kulina Bana bb, 72000 Zenica</p>
        <p><FaClock/> Pon-Pet 9:00 - 17:00</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.9396954618333!2d17.904705802598322!3d44.206011950072316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee245ff67d1a7%3A0xbcd3fa7d080eeff1!2sStadion%20%22Bilino%20Polje%22!5e0!3m2!1sen!2sba!4v1760986244005!5m2!1sen!2sba" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
        <div className="kontakt-info">
        <h3>Kontakt informacije:</h3>
        <p><FaPhone/>032 488 401 </p>
        <p><FaEnvelope/>info@goexplore.ba</p>
        <p><a href="https://www.facebook.com"><FaFacebook/> GoExplore Zenica</a></p>
        <p><a href="https://www.instagram.com"><FaInstagram/> goexplore.zenica</a></p>
      </div>
    </div>
  );
}

export default Kontakt;
