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
        <header-button type="header-button" onClick={handleClick}>
          Home
        </header-button>
        <input type="text" placeholder="Search..."/>
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
    </div>

  );
};

export default App;