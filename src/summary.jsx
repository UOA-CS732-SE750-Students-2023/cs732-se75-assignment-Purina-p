import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import React from 'react';
import styles from './title.module.css'

function Summary() {
  return (
    <ParallaxProvider>
      <div className={styles.home}>
        {
          'SUMMARY'.split('').map((letter, i) => {
            return <Parallax key={i} translateX={["0px", 25*(i-3)+"px"]}>
              <div className={styles.word}>{letter}</div>
            </Parallax>
          })
        }
      </div>
    </ParallaxProvider>


  );
};

export default Summary;