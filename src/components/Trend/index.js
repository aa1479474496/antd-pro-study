import React from 'react';
import { Icon } from 'antd';
import classNames from 'classnames';
import styles from './index.less';

const Trend = ({
  colorful = true, 
  reverseColor = false,
  className,
  flag,
  children,
  ...rest
}) => {
  const classString = classNames(
    styles.trendItem,
    {
      [styles.trendItemGrey]: !colorful,
      [styles.reverseColor]: reverseColor && colorful,
    },
    className
  );
  return (
   <div className={classString} {...rest}>
    <span className={styles.value}>{children}</span>
    {flag && (
      <span className={styles[flag]}>
        <Icon type={`caret-${flag}`} />
      </span>
    )}
   </div>
  )
}

export default Trend;