import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <ul>
        <li>
          <button type="button" onClick={onLeaveFeedback}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={onLeaveFeedback}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={onLeaveFeedback}>
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};

export default FeedbackOptions;
