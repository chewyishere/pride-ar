import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from 'components/atoms/Wrapper';
import H2 from 'components/atoms/H2';
import P from 'components/atoms/P';
import styles from './HomeText.module.css';

const HomeText = ({ title, text }) => {
  const paragraphs = text.map((item, index) => <P key={index}>{item}</P>);
  return (
    <section className={styles.homeText}>
      <Wrapper>
        <H2>{title}</H2>
        {paragraphs}
      </Wrapper>
    </section>
  );
};

HomeText.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  text: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.node])
  ).isRequired
};

export default HomeText;
