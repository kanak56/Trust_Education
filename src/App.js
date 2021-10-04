import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading/Heading';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import NotFound from './NotFound/NotFound';
import BeforeNav from './Components/BeforeNav/BeforeNav';
import Branches from './Components/Branches/Branches';



function App() {
  return (
    <div className="App">
      <div>
        <BeforeNav></BeforeNav>
      </div>
      <Router>
        <Heading></Heading>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services>
            </Services>
          </Route>
          <Route path='/branches'>
            <Branches></Branches>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
