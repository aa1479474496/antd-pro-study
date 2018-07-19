import { queryProjectNotice } from '../services/api';

export default {
  namespace: 'project',

  state: {
    notice: [],
  },

  effects: {
    *fetchNotice(_, {call, put}) {
      const response = yield call(queryProjectNotice);
      // console.log(response);
      yield put({
        type: 'saveNotice',
        payload: Array.isArray(response.data) ? response.data : []
      })
    }
  },

  reducers: {
    saveNotice(state, { payload }) {
      return {
        ...state,
        notice: payload
      }
    }
  }
}