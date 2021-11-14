import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
