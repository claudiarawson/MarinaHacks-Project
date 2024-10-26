import * as React from 'react';

const App = () => {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        // implementation
    }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Home
      </button>
      <button type="button" onClick={handleClick}>
        Grades
      </button>
      <button type="button" onClick={handleClick}>
        Schedule
      </button>
      <button type="button" onClick={handleClick}>
        Community
      </button>
    </div>
  );
};

export default App;