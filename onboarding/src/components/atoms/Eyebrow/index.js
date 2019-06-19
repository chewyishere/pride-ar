import React from 'react';
import PropTypes from 'prop-types';
import styles from './Eyebrow.module.css';

const Eyebrow = ({ children }) => {
  return <p className={styles.eyebrow}>{children}</p>;
};

Eyebrow.propTypes = {
  children: PropTypes.node.isRequired
};

export default Eyebrow;
