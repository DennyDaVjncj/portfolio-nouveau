import './App.css';
import MediaCard from './HomePage';
import Contact from "./Contact";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ProminentAppBar from './particles/Header';

function App() {
  return (
    <Router basename="/">
      <ProminentAppBar/>
      <Switch>
        <Route exact path='/' component={MediaCard}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </Router>
  );
}
export default App;