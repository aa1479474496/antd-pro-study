
import mockjs from 'mockjs';
import { getFakeChartData } from './mock/chart';

import { format, delay } from 'roadhog-api-doc';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  'GET /mock/fake_chart_data': getFakeChartData,
}

export default (noProxy ? {} : delay(proxy, 1000));