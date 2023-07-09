import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="##">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="##">
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="##">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
