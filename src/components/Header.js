import { useState, useEffect } from 'react'

import headerLogo from '../header_logo.svg'
import hamburgerBar from '../hamburger_bar.svg'

import './Header.scss'

const Header = () => {
  const [scrollDown, setScrollDown] = useState(false);

  function onScrollChanged() {
    if (window.pageYOffset === 0) {
      setScrollDown(false);
    } else {
      setScrollDown(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollChanged);

    return () => {
      window.removeEventListener('scroll', onScrollChanged);
    }
  }, []);

  return (
    <div className="Header"
      style={{ boxShadow: scrollDown ? '0 3px 6px 0 rgba(0, 0, 0, 0.05)' : undefined }}>
      <img src={headerLogo} className="header-logo" alt="tirrilee-logo" />
      <img src={hamburgerBar} className="hamburger-bar" alt="hamburger-menu" />
    </div>
  );
}

export default Header
