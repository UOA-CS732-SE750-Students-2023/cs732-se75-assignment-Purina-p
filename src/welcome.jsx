import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import React from 'react';
import styles from './welcome.module.css'

function Welcome() {
  return (
    <ParallaxProvider>
      <div className={styles.home}>
        {
          'WELCOME-REACT'.split('').map((letter, i) => {
            return <Parallax key={i} translateX={["0px", 25*(i-8)+"px"]}>
              <div className={styles.word}>{letter}</div>
            </Parallax>
          })
        }
      </div>
    </ParallaxProvider>


  );
};

export default Welcome;