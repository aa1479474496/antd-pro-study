import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import List from './routes/List';
import Analysis from './routes/Dashboard/Analysis';
import Workplace from './routes/Dashboard/Workplace';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/list" exact component={List} />
        <Route path="/dashboard/analysis" exact component={Analysis} />
        <Route path="/dashboard/Workplace" exact component={Workplace} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
