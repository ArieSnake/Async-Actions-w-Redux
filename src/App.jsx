import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Users } from './features/users/users';
import './App.css';
import { AddUser } from './features/users/addUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </Router>
  )
}

export default App;
