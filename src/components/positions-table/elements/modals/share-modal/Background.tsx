import { useAtomValue } from 'jotai';

import stickerPath from 'assets/pnl-poster/sticker3.webp';
import DarkBackgroundSvg from 'assets/pnl-poster/darkBackground.svg?react';
import LightBackgroundSvg from 'assets/pnl-poster/lightBackground.svg?react';
import { enabledDarkModeAtom } from 'store/app.store';

import styles from './ShareModal.module.scss';

export const Background = () => {
  const enabledDarkMode = useAtomValue(enabledDarkModeAtom);

  return (
    <div className={styles.backgroundContainer}>
      {enabledDarkMode ? <DarkBackgroundSvg /> : <LightBackgroundSvg />}
      <img src={stickerPath} className={styles.image} alt="sticker" />
    </div>
  );
};
