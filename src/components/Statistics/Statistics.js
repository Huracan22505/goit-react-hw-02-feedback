import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>
          Positive feedback:
          {good > 0 ? positivePercentage(good, neutral, bad) : '0'}%
        </li>
      </ul>
    </>
  );
};

export default Statistics;
