import React, { Component } from 'react';
import numeral from 'numeral';
import { connect } from 'dva';
import { Row, Col, Tooltip, Icon, Card, Tabs } from "antd";

import { ChartCard, yuan, Field, MiniArea } from 'components/Charts';
import Trend from 'components/Trend';

import styles from './Analysis.less';

const { TabPane } = Tabs;

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234,
  });
}

const Yuan = ({ children }) => (
  <span
    dangerouslySetInnerHTML={{ __html: yuan(children) }} /* eslint-disable-line react/no-danger */
  />
);

@connect(({ chart, loading }) => ({
  chart,
  loading: loading.effects['chart/fetch'],
}))
export default class Analysis extends Component {
  state = {
    isShow: false
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'chart/fetch',
      payload: 'aaa'
    });
  }

  test = (text) => {
    alert(text)
  }
  show = () => {
    
    let isShow = !this.state.isShow;
    console.log(isShow, this.state.isShow);
    this.setState({
      isShow
    })
  }

  render() {
    const { chart, loading } = this.props;
    const { visitData } = chart;
    const topColResponsiveProps = {
      xs: 24,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 6,
      style: { marginBottom: 24 },
    };
    return (
      <div style={{ margin: '24px 24px 0' }}>
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="总销售额"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={() => <Yuan>126560</Yuan>}
              footer={<Field label="日均销售额" value={`￥${numeral(12423).format('0,0')}`} />}
              contentHeight={46}
            >
              <Trend flag="up" style={{ marginRight: 16 }}>
                周同比
                <span className={styles.trendText}>12%</span>
              </Trend>
              <Trend flag="down">
                日环比
                <span className={styles.trendText}>11%</span>
              </Trend>
            </ChartCard>
          </Col>
          <Col {...topColResponsiveProps}>
            <ChartCard
              bordered={false}
              title="访问量"
              action={
                <Tooltip title="指标说明">
                  <Icon type="info-circle-o" />
                </Tooltip>
              }
              total={() => <Yuan>8846</Yuan>}
              footer={<Field label="日访问量" value={`￥${numeral(1234).format('0,0')}`} />}
              contentHeight={46}
            >
              <MiniArea color="#975FE4" data={visitData} />
            </ChartCard>
          </Col>
        </Row>

        <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
          <div className={styles.salesCard}>
            <Tabs size="large" tabBarStyle={{ marginBottom: 24 }}>
              <TabPane tab="销售额" key="sales">
                <Row>
                  <Col xl={16} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesBar}>
                      <h4 onClick={() => this.show()}>销售额趋势</h4>
                      {this.state.isShow && (
                        <div style={{ height: '100px' }}>
                        <h3>if</h3>
                          <input type="text" />
                        </div>
                      )}
                      {(
                        <div className={this.state.isShow ? '' : styles.hide} style={{ height: '100px' }}>
                        <h3>hide</h3>
                          <input type="text" />
                        </div>
                      )}
                      <div style={{ height: '295px', background: 'skyblue' }}></div>
                    </div>
                  </Col>
                  <Col xl={8} lg={12} md={12} sm={24} xs={24}>
                    <div className={styles.salesRank}>
                      <h4 className={styles.rankingTitle}>门店销售额排名</h4>
                      <ul className={styles.rankingList}>
                        {rankingListData.map((item, i) => (
                          <li onClick={() => this.test(item.title)} key={item.title}>
                            <span className={i < 3 ? styles.active : ''}>{i + 1}</span>
                            <span>{item.title}</span>
                            <span>{numeral(item.total).format('0,0')}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tab="访问量" key="views">Content of Tab Pane 2</TabPane>
            </Tabs>
          </div>
        </Card>

      </div>
    )
  }
}