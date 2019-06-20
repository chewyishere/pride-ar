import React from 'react';
import PropTypes from 'prop-types';
import styles from './Number.module.css';

const Number = ({ children }) => {
  return <span className={styles.number}>{children}</span>;
};

Number.propTypes = {
  children: PropTypes.number.isRequired
};

export default Number;
