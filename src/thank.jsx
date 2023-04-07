import { Parallax } from 'react-scroll-parallax';
import React from 'react';
import styles from './thank.module.css'

function Thank() {

  return (
    <div className={styles.home}>
      <Parallax  translateX={[-50,50]} translateY={[450,451]} opacity={[0,1]}>
        <div className={styles.word}>Thank for watching!</div>
      </Parallax>
    </div>
  );
};

export default Thank;