import * as React from 'react';
import './index.css';

const App = () => {
    const [count, setCount] = React.useState(0);
    const handleClick = () => {
        // implementation
    }
  return (
    <div class="header">
      <header-button type="header-button" onClick={handleClick}>
        Home
      </header-button>
      <header-button type="header-button" onClick={handleClick}>
        Grades
      </header-button>
      <header-button type="header-button" onClick={handleClick}>
        Schedule
      </header-button>
      <header-button type="header-button" onClick={handleClick}>
        Community
      </header-button>
      <header-button type="header-button" onClick={handleClick}>
        Next Two Weeks
      </header-button>
    </div>
  );
};

export default App;