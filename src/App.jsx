import { useState } from 'react';
import { FeedbackOptions } from 'components/Feedback';
import { Statistics } from 'components/Statistics';
import { Section } from 'components/Section';
import { Container } from 'components/Feedback/FeedbackOptions.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleOnLeaveFeedback = e => {
    const { name } = e.target;

    // switch (name) {
    //   case 'good':
    //     setGood(prevState => prevState + 1);
    //     break;
    //   case 'neutral':
    //     setNeutral(prevState => prevState + 1);
    //     break;
    //   case 'bad':
    //     setBad(prevState => prevState + 1);
    //     break;

    //   default:
    //     break;
    // }
    if (name === 'good') {
      setGood(prevState => prevState + 1);
    } else if (name === 'neutral') {
      setNeutral(prevState => prevState + 1);
    } else if (name === 'bad') {
      setBad(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let goodPercentage = 0;
    goodPercentage = Math.round((good * 100) / countTotalFeedback());
    return goodPercentage;
  };

  const buttonName = ['good', 'neutral', 'bad'];

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={buttonName}
          onLeaveFeedback={handleOnLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
};
