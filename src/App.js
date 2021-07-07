import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './assets/scss/index.scss';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Services from './views/Services/Services';
import Projets from './views/Projets/Projets';
import Projet from './views/Projet/Projet';
import Contact from './views/Contact/Contact';
import Head from './components/Head/Head';
import Mentions from './views/Mentions/Mentions';

function App() {
  return (
    <main className="App">
      <Head />
      <Router>
        <Navbar />
        <Switch className="switch">
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/projets'>
            <Projets />
          </Route>
          <Route path='/projet/:id'>
            <Projet />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/mentions'>
            <Mentions />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
      
    </main>
  );
}

export default App;
