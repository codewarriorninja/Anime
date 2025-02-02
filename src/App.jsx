import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import {SpotlightNewDemo} from './page/Home';  // Import your HomePage component.
import DetailPage from './page/DetailPage';  // Import your DetailPage component.

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpotlightNewDemo/>} />  // Home page route for listing anime.
        <Route path="/anime/:id" element={<DetailPage />} />  // Detail page route for showing anime details.
      </Routes>
    </Router>
  );
}

export default App;
