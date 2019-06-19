import React from 'react';
import PropTypes from 'prop-types';
import styles from './H1.module.css';

const H1 = props => {
  return <h1 className={styles.h1}>H1</h1>;
};

H1.propTypes = {
  children: PropTypes.node.isRequired
};

export default H1;
