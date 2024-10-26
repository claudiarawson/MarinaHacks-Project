import * as React from 'react';
import './index.css';

const App = () => {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        // implementation
    }
  return (
    <div class="background">
      <button type="button" onClick={handleClick}>
        <div class="header">
          Home
        </div>
      </button>
      <button type="button" onClick={handleClick}>
        <div class="header">
          Grades
        </div>
      </button>
      <button type="button" onClick={handleClick}>
        <div class="header">
          Schedule
        </div>
      </button>
      <button type="button" onClick={handleClick}>
        <div class="header">
          Community
        </div>
      </button>
      <button type="button" onClick={handleClick}>
        <div class="header">
          Next Two Weeks
        </div>
      </button>
    </div>
  );
};

export default App;