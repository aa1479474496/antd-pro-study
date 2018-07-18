import React, { PureComponent } from 'react';
import moment from 'moment';
import { connect } from "dva";
import {Link} from 'dva/router';
import { Row, Col, Card, List, Avatar } from "antd";
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

import styles from './Workplace.less';

@connect(({ chart, loading }) => ({
  chart,
  loading
}))
export default class Workplace extends PureComponent {
  render() {
    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar
            size="large"
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>早安，曲丽丽，祝你开心每一天！</div>
          <div>交互专家 | 蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED</div>
        </div>
      </div>
    );
    const extraContent = (
      <div className={styles.extraContent}>
        <div className={styles.statItem}>
          <p>项目数</p>
          <p>56</p>
        </div>
        <div className={styles.statItem}>
          <p>团队内排名</p>
          <p>
            8
            <span> / 24</span>
          </p>
        </div>
        <div className={styles.statItem}>
          <p>项目访问</p>
          <p>2,223</p>
        </div>
      </div>
    );
    return (
      <PageHeaderLayout content={pageHeaderContent} extraContent={extraContent}>
        <h1>Workplace</h1>
      </PageHeaderLayout>
    )
  }
}