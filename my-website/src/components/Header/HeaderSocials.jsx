import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTelegram } from 'react-icons/fa';

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/евгений-колущинский/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/KolEvg" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://t.me/SkiPPy43" target="_blank" rel="noreferrer">
        <FaTelegram />
      </a>
    </div>
  );
}

export default HeaderSocials;
