import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import React from 'react';
import styles from './title.module.css'

function Title() {
  return (
    <ParallaxProvider>
      <div className={styles.home}>
        {
          'ATROPOS'.split('').map((letter, i) => {
            return <Parallax key={i} translateX={["0px", 25*(i-4)+"px"]}>
              <div className={styles.word}>{letter}</div>
            </Parallax>
          })
        }
      </div>
    </ParallaxProvider>


  );
};

export default Title;