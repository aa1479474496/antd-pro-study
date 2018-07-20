import { queryActivities } from '../services/api';

export default {
  namespace: 'activities',

  state: {
    list: []
  },

  effects: {
    *fetchList(_, { call, put }) {
      const response = yield call(queryActivities);
      // console.log(response.data);
      yield put({
        type: 'saveList',
        payload: {
          list: Array.isArray(response.data) ? response.data : []
        }
      })
    }
  },

  reducers: {
    saveList(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  }
}