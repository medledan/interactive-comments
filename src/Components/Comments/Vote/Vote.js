import React from 'react';
import './vote.css';

export const Vote = () => {
  return (
    <div className="voting">
      {/* <!-- Up button --> */}
      <button className="voting__button">
        <div className="voting__triangle voting__triangle--up"></div>
      </button>

      {/* <!-- Number --> */}
      <div className="voting__number">...</div>

      {/* <!-- Down button --> */}
      <button className="voting__button">
        <div className="voting__triangle voting__triangle--down"></div>
      </button>
    </div>
  );
};
