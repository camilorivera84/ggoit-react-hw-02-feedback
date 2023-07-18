import React, { useState } from 'react';
import {
  Container,
  WidgetContainer,
  FeedbackButton,
  ResultsContainer,
  NoFeedbackContainer,
} from '../Style/style';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ResultsContainer>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total feedback: {total}</p>
    <p>Positive feedback percentage: {positivePercentage}%</p>
  </ResultsContainer>
);

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <WidgetContainer>
    {options.map(option => (
      <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </FeedbackButton>
    ))}
  </WidgetContainer>
);

const Section = ({ title, children }) => (
  <div>
    <h2>{title}</h2>
    {children}
  </div>
);

const FeedbackWidget = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleButtonClick = feedbackType => {
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

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <NoFeedbackContainer>
            <p>No feedback given</p>
          </NoFeedbackContainer>
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};

export default FeedbackWidget;
