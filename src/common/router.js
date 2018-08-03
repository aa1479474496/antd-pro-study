// const app_models = [
//   { namespace: "@@dva", state: 0, reducers: {} },
//   { namespace: "products", state: Array(2), reducers: {} },
//   { namespace: "testlist", state: {}, effects: {} },
//   { namespace: "chart", state: {}, effects: {}, reducers: {} },
//   { namespace: "project", state: {}, effects: {}, reducers: {} },
//   { namespace: "activities", state: {}, effects: {}, reducers: {} },
//   { namespace: "form", state: Array(0), effects: {}, reducers: {} },
//   { namespace: "rule", state: {}, effects: {}, reducers: {} }
// ]

// const models = ['chart', 'project', 'chart1'];
// var filters =  models.filter(model => modelNotExisted(model));


import dynamic from 'dva/dynamic';

const modelNotExisted = (app, model) =>
  !app._models.some(({ namespace }) => {
    return namespace === model.substring(model.lastIndexOf('/') + 1);
  });

const dynamicWrapper = (app, models, component) => {
  return dynamic({
    app,
    models: () =>
      models.filter(model => modelNotExisted(app, model)).map(m => import(`../models/${m}.js`)),
    component
  })
}


export const getRouterData = app => {
  const routerConfig = {
    '/': {
      component: dynamicWrapper(app, [], () => import('../routes/IndexPage'))
    },
    '/dashboard/analysis': {
      component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis'))
    },
    '/dashboard/analysis/childrenroute': {
      component: dynamicWrapper(app, [], () => import('../routes/childrenRoute'))
    },
    '/dashboard/analysis/childrenroute2': {
      component: dynamicWrapper(app, [], () => import('../routes/childrenRoute2'))
    },
    '/dashboard/Workplace': {
      component: dynamicWrapper(app, ['project', 'activities', 'chart'], () => import('../routes/Dashboard/Workplace'))
    },
    '/forms/basicform': {
      component: dynamicWrapper(app, [], () => import('../routes/Forms/BasicForm'))
    },
    '/list/tablelist': {
      component: dynamicWrapper(app, ['rule'], () => import('../routes/List/TableList'))
    },
    '/profile/basic': {
      component: dynamicWrapper(app, [], () => import('../routes/Profile/Basic'))
    },
  }

  const routerData = {};
  Object.keys(routerConfig).forEach(path => {
    let router = routerConfig[path];
    router = {
      ...router
    }
    routerData[path] = router
  });
  return routerData;
}