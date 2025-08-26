const Hello = (props) => {
  console.log(`Comp.Hello - props: `);
  console.log(props);
  return (
    <div>
      <p>Hello {props.name}, registered as {props.pseudo}.</p>
    </div>
  );
};

const App = () => {
  console.log("Hello from app!");
  const date_now = new Date();
  const a = 1;

  // JSX to HTML handeled by Babel, configured by Vite.
  return (
    <>
      <p>Hello React, the time is {date_now.toString()}</p>
      <p>
        a = {a}
      </p>
      <Hello name='World' pseudo='W'/>
      <Hello name='Suomi'/>
      <Hello pseudo='Only'/>
    </>
  );
};

export default App;