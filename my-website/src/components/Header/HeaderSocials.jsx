import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaTelegram } from 'react-icons/fa';

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://telegram.com" target="_blank" rel="noreferrer">
        <FaTelegram />
      </a>
    </div>
  );
}

export default HeaderSocials;