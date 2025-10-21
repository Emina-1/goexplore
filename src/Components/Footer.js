import React from 'react';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className={`footer ${isHomePage ? 'fixed' : ''}`}>
      <p>© 2025 GoExplore Zenica. Sva prava zadržana.</p>
    </footer>
  );
}

export default Footer;
