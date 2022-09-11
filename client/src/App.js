import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './pages/Signup';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="flex-column">
        <Navigation/>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
