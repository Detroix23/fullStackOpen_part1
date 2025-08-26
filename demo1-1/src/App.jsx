import { useState } from 'react';

const Title = (props) => {
  console.log(`Comp.Title - props: `, props);
  const date_now = new Date();

  return (
    <div>
      <h1>Hello React!</h1>
      <h2>Time is now {date_now.toString()}.</h2>
    </div>
  );
};

const Display = ({ text, value }) => <p> Clicks {text}: {value}. </p>;

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <p>
        Start by using some buttons !
      </p>
    );
  } else {
    return (
      <p>
          History: {allClicks.join(' ')}
      </p>
    );  
  }
}  

const Counter = () => {
  const [ counters, setCounters ] = useState({
    left: 0,
    right: 0,
  });
  const [ allClicks, setAllClicks ] = useState([]);
  
  const buttonAdd = (values, side) => {
    return () => {
      setCounters({
        left: counters.left + values.left,
        right: counters.right + values.right,
      });
      setAllClicks(allClicks.concat(side));
      console.log(`Clicked Add for ${side}. Now left=${counters.left}, right=${counters.right}.`);
    };
  };

  const buttonSet = (values, side) => () => {
    setCounters({
      left: values.left,
      right: values.right,
    });
    setAllClicks(allClicks.concat(side));
    console.log(`Clicked Set for ${side} with l=${values.left}, r=${values.right}. Now left=${counters.left}, right=${counters.right}.`);
  };

  console.log(`Values: left=${counters.left}, right=${counters.right}, history=[${allClicks}]`);

  return (
    <div>
      <Display text="Left" value={counters.left} />
      <Display text="Right" value={counters.right} />
      <Button
        text="Left."
        onClick={buttonAdd({left: 3, right: 2}, "L")}
      />
      <Button
        text="Reset."
        onClick={buttonSet({left: 0, right: 0}, "0")}
      />
      <Button
        text="Right."
        onClick={buttonAdd({left: 1, right: 4}, "R")}
      />
      <History allClicks={allClicks}/>
    </div>
  );
}

const App = () => {
  console.log("Hello from app!");

  // JSX to HTML handeled by Babel, configured by Vite.
  return (
    <>
      <Title />
      <Counter />
    </>
  );
};

export default App;