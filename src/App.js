import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Todos from './Todos/Todos';

import './App.css';
import { connect } from 'react-redux';



function App(props) {
  
  let routes = <Switch>
                    <Route path='/' exact component={Home} />
                    <Redirect from='/home' to='/' />
                    <Route component={Home} />
                </Switch>;
  if(props.isAuthenticated) routes = <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' component={Todos} />
          <Redirect from='/home' to='/' />
          <Route component={Home} />
        </Switch>;

  return (
    <div className="App">

        { routes }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  }
}

export default connect(mapStateToProps)(App);
