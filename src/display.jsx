import { useParallax, ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';
import styles from './display.module.css'

function Display() {
  const parallax = useParallax < HTMLDivElement > ({
    rotateY: [0, 360],
  });
  return (
    <ParallaxProvider>
      <div ref={parallax.ref} className={styles.Display}>
        <div className={styles.word}>W</div>
        <div className={styles.word}>E</div>
        <div className={styles.word}>L</div>
        <div className={styles.word}>C</div>
        <div className={styles.word}>O</div>
        <div className={styles.word}>M</div>
        <div className={styles.word}>E</div>
        <div className={styles.word1}>T</div>
        <div className={styles.word1}>O</div>
        <div className={styles.word}>S</div>
        <div className={styles.word}>E</div>
        <div className={styles.word}>E</div>
        <div className={styles.word1}>M</div>
        <div className={styles.word1}>Y</div>
        <div className={styles.word}>W</div>
        <div className={styles.word}>O</div>
        <div className={styles.word}>R</div>
        <div className={styles.word}>K</div>
      </div>
    </ParallaxProvider>


  );
};

export default Display;