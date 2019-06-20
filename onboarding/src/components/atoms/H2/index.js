import React from 'react';
import PropTypes from 'prop-types';
import styles from './H2.module.css';

const H2 = ({ children }) => {
  return <h2 className={styles.h2}>{children}</h2>;
};

H2.propTypes = {
  children: PropTypes.node.isRequired
};

export default H2;
