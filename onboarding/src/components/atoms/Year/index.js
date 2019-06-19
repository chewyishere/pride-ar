import React from 'react';
import PropTypes from 'prop-types';
import styles from './Year.module.css';

const Year = ({ children }) => {
  return <p className={styles.year}>{children}</p>;
};

Year.propTypes = {
  children: PropTypes.node.isRequired
};

export default Year;
