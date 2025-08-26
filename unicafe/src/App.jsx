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

const ReviewMeter = ({ review, value }) => {
  console.log(`Comp.ReviewMeter - review=${review}, value=${value}`);
  return (
    <p>{review}: {value}</p>
  );
};

const ReviewAverageTotal = ({ reviews }) => {
  const total = reviews.good + reviews.neutral + reviews.bad;
  const average = (reviews.good * 1 + reviews.neutral * 0 + reviews.bad * -1) / total;

  console.log(`Comp.ReviewAverageTotal - average=${average}, reviews=`, reviews);
  return (
    <p>Average: {average}</p>
  );
};

const ReviewAveragePositive = ({ reviews }) => {
  const total = reviews.good + reviews.neutral + reviews.bad;
  const average = reviews.good / total;

  console.log(`Comp.ReviewAveragePositive - average=${average}, reviews=`, reviews);
  return (
    <p>Positive: {average}</p>
  );
};

const Statistics = ({ reviews }) => {
  const total_reviews = reviews.good + reviews.neutral + reviews.bad;

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
        <ReviewMeter review={"Good"} value={reviews.good}/>
        <ReviewMeter review={"Neutral"} value={reviews.neutral}/>
        <ReviewMeter review={"Bad"} value={reviews.bad}/>
        <ReviewAverageTotal reviews={reviews} />
        <ReviewAveragePositive reviews={reviews} />
      </>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
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