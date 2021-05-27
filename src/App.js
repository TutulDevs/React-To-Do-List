import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Todos from './Todos/Todos';

import './App.css';



function App() {
  return (
    <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' component={Todos} />
          <Redirect from='/home' to='/' />
          <Route component={Home} />
        </Switch>
    </div>
  );
}

export default App;
