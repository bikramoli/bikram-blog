
import './App.css';

import useNavbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Home from './pages/Home';
import InnerBlog from './components/inner-blog/InnerBlog';
import Footer from './components/footer/Footer';
import About from './pages/About';
import FetchApi from './pages/FetchApi';
import Login from './pages/Login';


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
        <Route exact="true" path="/login" component={Login} />
      </Switch>
      <Footer Themecolor={ThemeColor} />
    </BrowserRouter>
  );
}

export default App;
