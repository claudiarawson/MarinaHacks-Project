/*import Dashboard from './Components/dashboard';
import Calendar from './Components/calendar';

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
// notesgit
*/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import Calendar from './Components/calendar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
