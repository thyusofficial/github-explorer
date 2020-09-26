import React, { useContext } from 'react';
import { FiSun, FiMoon, FiChevronLeft } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import logoImg from '../../assets/logo.svg';
import logoImgDark from '../../assets/logo-dark.svg';
import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { title: themeTitle } = useContext(ThemeContext);

  const { pathname } = useLocation();
  const { title } = useContext(ThemeContext);

  return (
    <Container>
      <img
        src={title === 'light' ? logoImg : logoImgDark}
        alt="Github explorer logo"
      />

      <button type="button" onClick={toggleTheme}>
        {themeTitle === 'light' ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      {pathname !== '/' && (
        <Link to="/">
          <FiChevronLeft size={20} />
          Voltar
        </Link>
      )}
    </Container>
  );
};

export default Header;
