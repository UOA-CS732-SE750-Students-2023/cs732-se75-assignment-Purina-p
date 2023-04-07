import { Parallax } from 'react-scroll-parallax';
import styles from './card.module.css'


function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.card1}>
                <Parallax translateX={['0px', '100px']} translateY={['0px', '215px']} opacity={[0,1]}>
                    <img src="image/sky1.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '0px']} translateY={['0px', '215px']} opacity={[0,1]}>
                    <img src="image/sky2.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '-100px']} translateY={['0px', '215px']} opacity={[0,1]}>
                    <img src="image/sky3.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '150px']} translateY={['0px', '185px']} opacity={[0,1]}>
                    <img src="image/m1.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '0px']} translateY={['0px', '185px']} opacity={[0.4,1]}>
                    <img src="image/m2.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '-150px']} translateY={['0px', '185px']} opacity={[0.4,1]}>
                    <img src="image/m3.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '285px']} translateY={['0px', '100px']} opacity={[0.6,1]}>
                    <img src="image/b1.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '0px']} translateY={['0px', '100px']} opacity={[0.6,1]}>
                    <img src="image/b2.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px', '-285px']} translateY={['0px', '100px']} opacity={[0.6,1]}>
                    <img src="image/b3.jpg" />
                </Parallax>
            </div>
        </div>



    )
}

export default Card;