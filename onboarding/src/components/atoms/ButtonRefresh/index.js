import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonRefresh.module.css';

const ButtonRefresh = ({ children }) => {
  return (
    <button
      className={styles.buttonRefresh}
      type="button"
      onClick={() => {
        window.location.reload();
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="234"
        height="50"
        viewBox="0 0 234 50"
      >
        <g fill="none" fillRule="evenodd">
          <rect width="234" height="50" fill="#31469F" rx="25" />
          <g stroke="#ED9298">
            <path
              strokeLinejoin="round"
              strokeWidth="3"
              d="M216.5 25.5c0-6.075-4.701-11-10.5-11s-10.5 4.925-10.5 11 4.701 11 10.5 11c3.5-.524 6-1.571 7.5-3.143"
            />
            <path strokeWidth="4" d="M210 23.143L216.6 26l4.4-5" />
          </g>
          <text
            fill="#ED9298"
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
    </button>
  );
};

ButtonRefresh.propTypes = {
  children: PropTypes.node.isRequired
};

export default ButtonRefresh;
