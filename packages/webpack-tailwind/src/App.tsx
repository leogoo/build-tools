import React from 'react';
import styles from './App.less';
import Test from '../public/systemSettings.svg';
// import SystemSetting from '@public/test.png';

export default function App() {
  return (
    <div className={styles.app}>
      <Test />
    </div>
  )
}