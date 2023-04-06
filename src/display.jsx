import { Parallax, useParallax, ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';
import styles from './display.module.css'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';


function Display() {
  const parallax = useParallax({
    rotateY: [-180, 360],
  });

  return (
    <div ref={parallax.ref} className={styles.home}>
      <Parallax >
        <div className={styles.word}>PARALLAX</div>
      </Parallax>
    </div>
  );
};

export default Display;