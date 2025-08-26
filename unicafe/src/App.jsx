import { useState } from 'react';

const Title = () => {
  return (
    <>
      <h1>UNICAFE</h1>
      <h2>Give feedback.</h2>
    </>
  );
};

const RatingButton = ({ onClick, text }) => {
  console.log(`Comp.RatingButton - Clicked '${text}'`);
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
};

const StatisticsLine = ({ text, value }) => {
  return(
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  );
};
const StatisticsPercentage = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td>
      <td>{value * 100}%</td>
    </tr>
  );
};

const Statistics = ({ reviews }) => {
  const total_reviews = reviews.good + reviews.neutral + reviews.bad;
  const average_good = reviews.good / total_reviews;
  const average_total = (reviews.good * 1 + reviews.neutral * 0 + reviews.bad * -1) / total_reviews;

  console.log(`Comp.Statistics - reviews=`, reviews);
  if (total_reviews === 0) {
    return (
      <>
        <h2>Statistics.</h2>
        <p>No feedback given, for now.</p>
      </>
    );
  } else {
    return (
      <>
        <h2>Statistics.</h2>
        <table>
          <tbody>
            <StatisticsLine text="Good" value={reviews.good} />
            <StatisticsLine text="Neutral" value={reviews.neutral} />
            <StatisticsLine text="Bad" value={reviews.bad} />
            <StatisticsLine text="Average" value={average_total} />
            <StatisticsPercentage text="Positive" value={average_good} />
          </tbody>
        </table>
      </>
    );
  }
};

const App = () => {
  // Ratings
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleRating = (review, set_review, increment) => () => {
    set_review(review + increment);
  }

  return (
    <div>
      <Title />
      <div>
        <RatingButton text="Good" onClick={handleRating(good, setGood, 1)} />
        <RatingButton text="Neutral" onClick={handleRating(neutral, setNeutral, 1)} />
        <RatingButton text="Bad" onClick={handleRating(bad, setBad, 1)} />
      </div>
      <Statistics reviews={{
        good: good, 
        neutral: neutral, 
        bad: bad}
      } />
    </div>
  );
};

export default App;