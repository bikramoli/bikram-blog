import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import InnerBlog from './components/inner-blog/InnerBlog';
import Footer from './components/footer/Footer';
import About from './pages/About';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact="true" path="/" component={Home} />
        <Route exact="true" path="/innerBlog/:id" component={InnerBlog} />
        <Route exact="true" path="/about" component={About} />

        {/* <Redirect to="/" /> //manage to return page back to its initial position when mistyped in url */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
