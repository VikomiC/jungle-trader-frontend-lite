import classnames from 'classnames';
import { useAtom } from 'jotai';
import { memo } from 'react';

import { Button } from '@mui/material';

import { selectedPeriodAtom } from 'store/tv-chart.store';
import { TvChartPeriodE } from 'types/enums';

import styles from './PeriodSelector.module.scss';

export const PeriodSelector = memo(() => {
  const [period, setPeriod] = useAtom(selectedPeriodAtom);

  return (
    <div className={styles.root}>
      {Object.values(TvChartPeriodE).map((value) => (
        <Button
          key={value}
          variant="outlined"
          className={classnames({ [styles.selected]: value === period })}
          onClick={() => setPeriod(value)}
        >
          {value}
        </Button>
      ))}
    </div>
  );
});
