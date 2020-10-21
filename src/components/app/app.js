import DummySwapiService from '../../services/dummy-swapi-service'
import ErrorIndicator from "../error-indicator";
import Header from "../header";
import {
  PeoplePage,
  PlanetPage,
  StarshipPage,
  LoginPage,
  SecretPage
} from '../pages'
import RandomPlanet from "../random-planet";
import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import { SwapiServiceProvider } from "../swapi-service-context";
import "./app.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import StarshipDetails from '../sw-components/starship-details'

import '../../resources/css/bootstrap.min.css'

export default class App extends Component {
  state = {
    hasError: false,
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState(({ isLoggedIn }) => {
      return {
        isLoggedIn: !isLoggedIn
      }
    })
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  onHandleChangeSource = () => {
    this.setState(({ swapiService }) => {
      const currentDataSource = swapiService instanceof SwapiService ? DummySwapiService : SwapiService
      return {
        swapiService: new currentDataSource()
      }
    })
  }

  render() {
    const { hasError, isLoggedIn } = this.state;
    if (hasError) return <ErrorIndicator />;
    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <Router>
          <div className="app">
            <Header handleChangeSource={() => this.onHandleChangeSource} />
            <RandomPlanet />
            {/* updateInterval={30000} */}

            <Switch>
              <Route path='/'
                exact
                render={() => <h2>Welcome to SrarDB</h2>}
              />

              {/* Change list elements with use router (list and details on single page) */}
              <Route path='/person/:id?'
                exact
                component={PeoplePage} />

              {/* Change list elements without react router */}
              <Route path='/planets'
                exact
                component={PlanetPage} />

              {/* Change list elements with use router (list and details on different pages) */}
              <Route path='/starships'
                exact
                component={StarshipPage}
              />
              <Route path="/starships/:id"
                render={({ match, location, history }) => {
                  const { id } = match.params;
                  return <StarshipDetails idItemList={id} />
                }} />

              <Route
                path='/login'
                render={() => {
                  return <LoginPage
                    isLoggedIn={isLoggedIn}
                    onLogin={this.onLogin}
                  />
                }} />
              <Route
                path='/secret'
                render={() => {
                  return <SecretPage
                    isLoggedIn={isLoggedIn}
                  />
                }}
              />
              {/* <Redirect to='/' /> */}
              <Route render={() => { return <h2>Page not found</h2> }} />
            </Switch>

          </div>
        </Router>
      </SwapiServiceProvider>
    );
  }
}
