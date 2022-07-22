
import './App.css';
import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import List from './pages/list/List';
import Hotel from './pages/hotels/Hotel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/:id' element={<Hotel />} />
      </Routes>
    </Router>
  );
}

export default App;
