
import mockjs from 'mockjs';
import { getFakeChartData } from './mock/chart';
import { getActivities, getNotice } from './mock/api';

import { format, delay } from 'roadhog-api-doc';
// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  'GET /mock/fake_chart_data': getFakeChartData,
  'GET /mock/project/notice': getNotice,
  'GET /mock/activities': getActivities,
  'POST /mock/forms': (req, res) => {
    res.send({ message: 'Ok' ,code: 200});
  },
}

export default (noProxy ? {} : delay(proxy, 1000));