import { useState } from 'react';

const Title = () => {
  return (
    <div>
      <h1>ANECDOTES.</h1>
     <h2>Get various quotes from the field of software engineering.</h2>
    </div>
  );
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  );
}

const Anecdote = ({ anecdote, vote }) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>Has {vote} votes.</p>
    </div>
  );
}

const Podium = ({ anecdote, vote }) => {
  return(
    <div>
      <h2>Podium of anecdotes</h2>
      <Anecdote anecdote={anecdote} vote={vote} />
    </div>
  );
}

const App = () => {
  // Get a random integer function, from 0 (inclusive) to max (inclusive).
  const randomInt = (max) => Math.floor(Math.random() * max);
  
  const newAnecdote = (max) => () => {
    let r = 0
    do {
      r = randomInt(max);
    } while (r === selected);
    setSelected(r);
  };

  const voteUp = () => {
    // Create a copy *of each values*, and not of the whole array in one time.
    let next_votes = [...votes];
    next_votes[selected] += 1;
    setVotes(next_votes);
  };

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
  const [ votes, setVotes ] = useState(new Uint8Array(anecdotes.length));
  const [selected, setSelected] = useState(randomInt(anecdotes.length));

  let max_votes = 0;
  let max_index = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > max_votes) {
      max_votes = votes[i];
      max_index = i;
    } 
  }

  console.log(`Comp.App - Index selected=${selected}, text=${anecdotes[selected]}, votes=`, votes);
  return (
    <div>
      <Title />
      <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
      <Button text="New anectode." onClick={newAnecdote(anecdotes.length)} />
      <Button text="Vote this anectode!" onClick={voteUp} />
      <Podium anecdote={anecdotes[max_index]} vote={max_votes} />
    </div>
  );
};

export default App;
