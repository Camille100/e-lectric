import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './assets/scss/index.scss'

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Services from './views/Services/Services'
import Projets from './views/Projets/Projets'
import Contact from './views/Contact/Contact'

function App() {
  return (
    <main className="App">
      <Router>
        <Navbar />
        <Switch className="switch">
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/projets'>
            <Projets />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
