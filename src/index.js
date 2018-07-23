import dva from 'dva';
import './index.less';

import createHistory from 'history/createHashHistory';
import createLoading from 'dva-loading';
// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);
app.model(require('./models/testlist').default);
app.model(require('./models/chart').default);
app.model(require('./models/project').default);
app.model(require('./models/activities').default);
app.model(require('./models/form').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
