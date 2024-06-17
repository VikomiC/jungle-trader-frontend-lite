import classnames from 'classnames';
import { useAtomValue } from 'jotai';
import { memo, useMemo } from 'react';

import { useMediaQuery, useTheme } from '@mui/material';

import { enabledDarkModeAtom } from 'store/app.store';

import styles from './StaticJungleBackground.module.scss';

export const StaticJungleBackground = memo(() => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const enabledDarkMode = useAtomValue(enabledDarkModeAtom);

  const themeMode = enabledDarkMode ? 'dark' : 'light';
  const device = useMemo(() => {
    if (isMobile) {
      return 'mobile';
    }
    if (isTablet) {
      return 'tablet';
    }
    return 'desktop';
  }, [isMobile, isTablet]);

  return (
    <div
      className={classnames(styles.root, { [styles.tablet]: isTablet && !isMobile, [styles.mobile]: isMobile })}
      style={{
        backgroundImage: `url(images/backgrounds/${device}_${themeMode}.jpeg)`,
      }}
    ></div>
  );
});
