import * as React from 'react';
import './index.css';

const App = () => {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        // implementation
    }
  return (
    <div>
      <div class="header">
        <div type="button" onClick={handleClick}>
          Home
        </div>
        <input type="text" placeholder="Search..."/>
        <div type="button" onClick={handleClick}>
          Grades
        </div>
        <div type="button" onClick={handleClick}>
          Schedule
        </div>
        <div type="button" onClick={handleClick}>
          Community
        </div>
        <div type="button" onClick={handleClick}>
          Next Two Weeks
        </div>
      </div>
    </div>

  );
};

export default App;