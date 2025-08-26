import { useState } from 'react';

const Title = () => {
  return (
    <>
      <h1>UNICAFE</h1>
      <h2>Give feedback.</h2>
    </>
  );
}

const RatingButton = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}



const ReviewMeter = ({ review, value}) => {
  return (
    <p>{review}: {value}</p>
  );
}

const Statistics = ({ reviews }) => {
  return (
    <>
      <h2>Statistics</h2>
      <ReviewMeter review={"Good"} value={reviews[0]}/>
      <ReviewMeter review={"Neutral"} value={reviews[1]}/>
      <ReviewMeter review={"Bad"} value={reviews[2]}/>
    </>
  );
}

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
      <Statistics reviews={[good, neutral, bad]} />
    </div>
  );
}

export default App;