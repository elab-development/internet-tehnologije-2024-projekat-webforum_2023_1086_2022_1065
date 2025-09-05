import logo from './logo.svg';
//import './App.css';
//import './style.css';
import New from './pages/New'
import LoginForm from './pages/LoginForm';
import Filters from './pages/FiltersPage';
import Logout from './pages/LogoutPage';
import ThreadPage from './pages/ThreadPage';
import PodesavanjaPage from './pages/PodesavanjaPage';
import RegisterPage from './pages/Registracija';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // rutiranje biblioteka

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<New />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/filter" element={<Filters />} />
        <Route path="/thread/:id" element={<ThreadPage />} />
        <Route path="/settings" element={<PodesavanjaPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>

  );
}

export default App;
