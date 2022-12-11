import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import CompStyle from './containers/styled/CompStyle';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/styled">Styled</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styled" element={<CompStyle />} />
      </Routes>
    </div>
  );
}

export default App;
