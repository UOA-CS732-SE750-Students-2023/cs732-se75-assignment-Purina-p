import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';
import styles from './display.module.css'

function Display() {
  const parallax = useParallax({
    rotateY: [-180, 360],
  });

  return (
      <div ref={parallax.ref} className={styles.home}>
      {
          'PARALLAX'.split('').map((letter, i) => {
            return <Parallax key={i}>
              <div className={styles.word}>{letter}</div>
            </Parallax>
          })
        }
      </div>
  );
};

export default Display;