import React from 'react';
import PropTypes from 'prop-types';
import styles from './Img.module.css';

const Img = ({ src, src2x, srcLarge, srcLarge2x, alt }) => {
  const largeBp = '(min-width: 1440px)';

  return (
    <picture>
      <source media={largeBp} srcSet={`${srcLarge}, ${srcLarge2x} 2x`} />
      <img className={styles.img} src={src} srcSet={`${src2x} 2x`} alt={alt} />
    </picture>
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  src2x: PropTypes.string.isRequired,
  srcLarge: PropTypes.string.isRequired,
  srcLarge2x: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Img;
