import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import TestList from './routes/TestList';
import Analysis from './routes/Dashboard/Analysis';
import Workplace from './routes/Dashboard/Workplace';
import BasicForm from './routes/Forms/BasicForm';
import TableList from './routes/List/TableList';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/products" exact component={Products} />
        <Route path="/testlist" exact component={TestList} />
        <Route path="/dashboard/analysis" exact component={Analysis} />
        <Route path="/dashboard/Workplace" exact component={Workplace} />
        <Route path="/forms/basicform" exact component={BasicForm} />
        <Route path="/list/tablelist" exact component={TableList} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
