import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { getRouterData } from './common/router';
console.log(getRouterData());

// import childrenRoute from './routes/childrenRoute';

// import IndexPage from './routes/IndexPage';
// import Products from './routes/Products';
// import TestList from './routes/TestList';
// import Analysis from './routes/Dashboard/Analysis';
// import Workplace from './routes/Dashboard/Workplace';
// import BasicForm from './routes/Forms/BasicForm';
// import TableList from './routes/List/TableList';
// import Basic from './routes/Profile/Basic';

// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Switch>
//         <Route path="/" exact component={IndexPage} />
//         <Route path="/products" exact component={Products} />
//         <Route path="/testlist" exact component={TestList} />
//         <Route path="/dashboard/analysis" exact component={Analysis} />
//         <Route path="/dashboard/Workplace" exact component={Workplace} />
//         <Route path="/forms/basicform" exact component={BasicForm} />
//         <Route path="/list/tablelist" exact component={TableList} />
//         <Route path="/profile/basic" exact component={Basic} />
//       </Switch>
//     </Router>
//   );
// }

function RouterConfig({ history, app }) {
  const routerData = getRouterData(app);
  const IndexPage = routerData['/'].component;
  const Analysis = routerData['/dashboard/analysis'].component;
  console.log(routerData);
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/dashboard" component={Analysis} />
        {/*
        
          <Route path="/childrenroute" exact component={childrenRoute} />
        */}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
