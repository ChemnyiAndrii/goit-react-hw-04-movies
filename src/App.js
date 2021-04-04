import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from './routes';
import Navigation from './components/Navigation/Navigation';

import './components/styles/base.css';

const App = () => (
  <div>
    <Navigation />

    <Suspense fallback={<h2>Load...</h2>}>
      <Switch>
        <Route
          exact
          path={routes.HomePage.path}
          component={routes.HomePage.component}
        />
        <Route
          path={routes.MovieDetailsPage.path}
          component={routes.MovieDetailsPage.component}
        />
        <Route
          path={routes.MoviesPage.path}
          component={routes.MoviesPage.component}
        />
        <Redirect to={routes.HomePage.path} />
      </Switch>
    </Suspense>
  </div>
);

export default App;