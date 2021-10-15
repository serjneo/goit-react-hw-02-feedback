import React, { Component } from 'react';
import FeedbackOptions from './components/Feedback';
import Statistics from './components/Statistics';
import Section from './components/Section';
import Notification from './components/Notification';

export default class App extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };
  addFeedback = value => () => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1 || 0,
    }));
  };
  render() {
    const { good, bad, neutral } = this.state;
    const countTotalFeedback = good + bad + neutral;
    const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100,
    );
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.addFeedback}
          ></FeedbackOptions>
        </Section>
        {countTotalFeedback > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
          </Section>
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </div>
    );
  }
}
