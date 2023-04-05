import { Parallax } from 'react-scroll-parallax';
import styles from './card.module.css'
// import Atropos from 'atropos';
import Atropos from 'atropos/react';


function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.card1}>
                <Parallax translateX={['0px', '100px']} translateY={['0px', '215px']}>
                    <img src="image/sky1.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '0px']} translateY={['0px', '215px']}>
                    <img src="image/sky2.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '-100px']} translateY={['0px', '215px']}>
                    <img src="image/sky3.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '150px']} translateY={['0px', '185px']}>
                    <img src="image/m1.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '0px']} translateY={['0px', '185px']}>
                    <img src="image/m2.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '-150px']} translateY={['0px', '185px']}>
                    <img src="image/m3.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '270px']} translateY={['0px', '100px']}>
                    <img src="image/b1.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '0px']} translateY={['0px', '100px']}>
                    <img src="image/b2.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '-270px']} translateY={['0px', '100px']}>
                    <img src="image/b3.jpg" />
                </Parallax>
            </div>
        </div>



    )
}

export default Card;