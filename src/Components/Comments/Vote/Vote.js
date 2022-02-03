import React from 'react';
import './vote.css';

export const Vote = () => {
  return (
    <div className="voting">
      <button className="voting__button">
        <div className="voting__triangle voting__triangle--up"></div>
      </button>
      <div className="voting__number">12</div>
      <button className="voting__button">
        <div className="voting__triangle voting__triangle--down"></div>
      </button>
    </div>
  );
};
