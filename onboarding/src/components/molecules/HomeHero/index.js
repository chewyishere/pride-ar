import React from 'react';
import Img from 'components/atoms/Img';
import Button from 'components/atoms/Button';
import styles from './HomeHero.module.css';

const HomeHero = () => {
  const colors = getComputedStyle(document.documentElement);
  return (
    <div className={styles.homeHero}>
      <Img
        src={require('assets/img/p-1.jpg')}
        src2x={require('assets/img/p-1@2x.jpg')}
        srcLarge={require('assets/img/p-1-large.jpg')}
        srcLarge2x={require('assets/img/p-1-large@2x.jpg')}
        alt="test"
      />
      <Button
        href="/test"
        bgColor={colors.getPropertyValue('--pale-red')}
        color={colors.getPropertyValue('--silver')}
      >
        Let's go
      </Button>
    </div>
  );
};

export default HomeHero;
