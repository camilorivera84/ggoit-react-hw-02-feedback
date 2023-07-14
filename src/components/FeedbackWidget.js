import React, { useState } from 'react';

const FeedbackWidget = () => {
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleButtonClick = feedbackType => {
    setSelected(feedbackType);
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const renderResults = () => {
    if (selected === null) {
      return <p>No feedback given</p>;
    }

    const { good, neutral, bad } = feedback;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total feedback: {total}</p>
        <p>Positive feedback percentage: {positivePercentage}%</p>
      </div>
    );
  };

  return (
    <div className="feedback-widget">
      <h2>Feedback Widget</h2>

      <button
        className="feedback-button"
        onClick={() => handleButtonClick('good')}
      >
        Good
      </button>
      <button
        className="feedback-button"
        onClick={() => handleButtonClick('neutral')}
      >
        Neutral
      </button>
      <button
        className="feedback-button"
        onClick={() => handleButtonClick('bad')}
      >
        Bad
      </button>

      {renderResults()}
    </div>
  );
};

export default FeedbackWidget;
