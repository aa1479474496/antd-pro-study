import { fakeChartData } from '../services/api';

export default {
  namespace: 'chart',
 
  state: {
    title: 'chart-analysis',
    visitData: [],
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      // console.log(payload);
      const response = yield call(fakeChartData);
      // console.log(response);
      yield put({
        type: 'save',
        payload: response.data
      })
    }
  },
  
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}