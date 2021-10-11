// import React, { Component } from 'react';
// import FeedbackOptions from './components/Feedback';
// import Notification from './components/Notification';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = value => () => {
//     this.setState(prevState => ({
//       [value]: prevState[value] + 1,
//     }));
//   };

//   render() {
//     const { good, bad, neutral } = this.state;
//     const countTotalFeedback = good + bad + neutral;
//     const countPositiveFeedbackPercentage =
//       good > 0 ? Math.round((good / countTotalFeedback) * 100) : 0;

//     return (
//       <div>
//         <section title="Please leave feedback">
//           <FeedbackOptions />
//         </section>
//         <section title="Statisticts"></section>
//         {countTotalFeedback > 0 ? (
//           <Section title={'Statistics'}>
//             <Statistics
//               good={good}
//               bad={bad}
//               neutral={neutral}
//               total={countTotalFeedback}
//               positivePercentage={countPositiveFeedbackPercentage}
//             ></Statistics>
//           </Section>
//         ) : (
//           <Notification message={'No feedback given'} />
//         )}
//       </div>
//     );
//   }
// }

// export default App;
