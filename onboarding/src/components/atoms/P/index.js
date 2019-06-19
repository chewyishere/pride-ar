import React from 'react';
import PropTypes from 'prop-types';
import styles from './P.module.css';

const P = ({ children }) => {
  return <p className={styles.p}>{children}</p>;
};

P.propTypes = {
  children: PropTypes.node.isRequired
};

export default P;
