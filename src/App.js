import logo from './logo.svg';
import './App.css';

import useNavbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import InnerBlog from './components/inner-blog/InnerBlog';
import Footer from './components/footer/Footer';
import About from './pages/About';
import FetchApi from './pages/FetchApi';


function App() {
  const { render, ThemeColor } = useNavbar()
  return (
    <BrowserRouter>
      {render}
      <Switch>
        <Route exact="true" path="/"><Home Themec={ThemeColor} /></Route>
        <Route exact="true" path="/innerBlog/:id" ><InnerBlog /></Route>
        <Route exact="true" path="/about" component={About} />
        <Route exact="true" path="/fetchdata" component={FetchApi} />
        {/* <Redirect to="/" /> //manage to return page back to its initial position when mistyped in url */}
      </Switch>
      <Footer Themecolor={ThemeColor} />
    </BrowserRouter>
  );
}

export default App;
