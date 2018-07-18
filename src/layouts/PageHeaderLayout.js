import React from 'react';
import { Link } from "dva/router";
import PageHeader from 'components/PageHeader';
import styles from './PageHeaderLayout.less';


export default ({ children, ...restProps }) => (
  <div>
    <PageHeader  {...restProps} />
    {children ? <div className={styles.content}>{children}</div> : null}
  </div>
);