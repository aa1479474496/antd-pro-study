import React, { PureComponent, createElement } from 'react';
import classNames from 'classnames';
import styles from './index.less';


export default class PageHeader extends PureComponent {
  render() {
    const { content, extraContent, title } = this.props;
    return (
      <div className={styles.pageHeader}>
        <div className={styles.detail}>
          <div className={styles.main}>
            <div className={styles.row}>
              {title && <h1 className={styles.title}>{title}</h1>}
            </div>
            <div className={styles.row}>
              {content && <div className={styles.content}>{content}</div>}
              {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}