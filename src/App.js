import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';

import './App.css';
import { connect } from 'react-redux';



function App(props) {
  
  let routes = <Switch>
                    <Route path='/' exact component={Home} />
                    <Redirect to='/' />
                </Switch>;
  if(props.isAuthenticated) routes = <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/home' component={Home} />
          <Redirect to='/' />
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
