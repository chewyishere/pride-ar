import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from 'assets/img/pride-march-logo-white.svg';
import Year from 'components/atoms/Year';
import styles from './Header.module.css';

const Header = ({ text }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Year>{text}</Year>
    </header>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired
};

export default Header;
