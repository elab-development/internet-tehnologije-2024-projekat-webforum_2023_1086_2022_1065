import logo from './logo.svg';
//import './App.css';
//import './style.css';
import New from './pages/New'
import LoginForm from './pages/LoginForm';
import Filters from './pages/FiltersPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // rutiranje biblioteka

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<New />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/filter" element={<Filters />} />
      </Routes>
    </Router>

  );
}

export default App;
