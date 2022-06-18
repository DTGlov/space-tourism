import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Crew from './pages/Crew/Crew';
import Destination from './pages/Destination/Destination';
import Homepage from './pages/Homepage/Homepage';
import Technology from './pages/Technology/Technology';
import * as ROUTES from './utils/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.DESTINATION} element={<Destination />} />
        <Route path={ROUTES.CREW} element={<Crew />} />
        <Route path={ROUTES.TECHNOLOGY} element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
