import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ href, bgColor, color, children }) => {
  return (
    <a className={styles.button} href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="234"
        height="50"
        viewBox="0 0 234 50"
      >
        <g fill="none" fillRule="evenodd">
          <rect width="234" height="50" fill={bgColor} rx="25" />
          <g stroke={color} strokeWidth="3">
            <path strokeLinecap="square" d="M187.417 25.5h22.697" />
            <path d="M198.667 13L212 25.5 198.667 38" />
          </g>
          <text
            fill={color}
            fontFamily="SFProText-Regular, SF Pro Text"
            fontSize="18"
            letterSpacing="-.434"
          >
            <tspan x="24" y="31">
              {children}
            </tspan>
          </text>
        </g>
      </svg>
    </a>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Button;
