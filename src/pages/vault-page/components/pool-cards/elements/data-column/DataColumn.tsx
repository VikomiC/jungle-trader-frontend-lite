import classnames from 'classnames';

import { DataItemI } from './types';

import styles from './DataColumn.module.scss';

interface DataColumnPropsI {
  title: string;
  titleLink?: string;
  items: DataItemI[];
}

export const DataColumn = ({ title, titleLink, items }: DataColumnPropsI) => {
  return (
    <div className={styles.root}>
      {titleLink ? (
        <a href={titleLink} target="_blank" rel="noopener noreferrer" title={title} className={styles.titleLink}>
          {title}
        </a>
      ) : (
        <div className={styles.title}>{title}</div>
      )}
      {items.map((item) => (
        <div key={item.title} className={styles.itemLine}>
          <span
            className={classnames(styles.itemLogoHolder, { [styles.rounded]: item.isRounded })}
            style={{ backgroundColor: item.logoBackground }}
          >
            {item.logo}
          </span>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
};
