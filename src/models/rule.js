import { queryRule } from '../services/api';

export default {
  namespace: 'rule',

  state: {
    data: {
      list: [],
      pagination: {},
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryRule, payload);
      yield put({
        type: 'save',
        payload: response.data
      });
    }
  },

  reducers: {
    save(state, { payload }) {
      const { list, pagination } = payload;
      return {
        ...state,
        data: {
          ...state.data,
          list,
          pagination
        }
      }
    }
  }
}