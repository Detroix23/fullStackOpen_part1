const Header = (props) => {
  // Header takes care of rendering the name of the course.

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

const Part = (props) => {
  // Part of `Content`. Each `Part` renders 1 exercise.

  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  );
}

const Content = (props) => {
  // Content renders the parts and their number of exercises.
  console.log(props.parts);

  return (
    <div>
      <Part part={props.parts[0]}/>
      <Part part={props.parts[1]}/>
      <Part part={props.parts[2]}/>
    </div>
  );
}

const Total = (props) => {
  // Total renders the total number of exercises.
  let exercises_sum = 0;
  props.parts.forEach((part) => {
    exercises_sum += part.exercises
  });

  return (
    <div>
      <p>
        Number of exercises {exercises_sum}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',   
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;
