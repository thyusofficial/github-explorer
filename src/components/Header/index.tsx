import React, { useContext } from 'react';
import { FiSun, FiMoon, FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import logoImg from '../../assets/logo.svg';
import { Container } from './styles';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { title: themeTitle } = useContext(ThemeContext);
  return (
    <Container>
      <img src={logoImg} alt="Github explorer logo" />

      <button type="button" onClick={toggleTheme}>
        {themeTitle === 'light' ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      <Link to="/">
        <FiChevronLeft size={20} />
        Voltar
      </Link>
    </Container>
  );
};

export default Header;
