import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Logout from './Auth/Logout';
import { authCheckState } from './store/actions/authAction';
import { useEffect } from 'react';



function App(props) {

  useEffect(() => {
    props.onTryAutoSignIn();
  })
  
  let routes = <Switch>
                    <Route path='/' exact component={Home} />
                    <Redirect to='/' />
                </Switch>;
  if(props.isAuthenticated) routes = <Switch>
          <Route path='/logout' component={Logout} />
          <Route path='/home' component={Home} />
          <Route path='/' exact component={Dashboard} />
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

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(authCheckState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
