import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../../src/Layout.js';
import HomePage from './views/HomePage.js';
import ServicesPage from './views/ServicesPage/ServicesPage.js';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
      </Switch>
    </Layout>
  );
};

export default App;
