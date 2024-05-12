import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
  

const handleFeedback = e => {
    const { name } = e.target;
    name === 'good' && setGood(good +1);
    name === 'neutral' && setNeutral(neutral +1);
    name === 'bad' && setBad(bad +1);
  };


const countTotalFeedback = () => {
    return good + neutral + bad;
  };

const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };


		const total = countTotalFeedback();
		const positivePercentage = countPositiveFeedbackPercentage();
    return (
    <>
    <Section title="Please leave feedback">
					<FeedbackOptions options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}/>
				</Section>        

  <Section title="Statistics">
    {total ? (
      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      positivePercentage={positivePercentage} />
    ) : (
    <Notification message="No feedback given." />
    )}
  </Section> 
    </>
  );
  }


export default App;