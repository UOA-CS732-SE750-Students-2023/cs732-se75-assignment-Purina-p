import { Parallax } from 'react-scroll-parallax';
import styles from './card.module.css'


function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.card1}>
                <Parallax translateX={['0px','145px']} translateY={['0px','10px']}>
                    <img src="image/sky1.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px','0px']} translateY={['0px','10px']}> 
                    <img src="image/sky2.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px','-145px']} translateY={['0px','10px']}>
                    <img src="image/sky3.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px','210px']}>
                    <img src="image/m1.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px','0px']} translateY={['0px','0px']}>
                    <img src="image/m2.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px','-210px']}>
                    <img src="image/m3.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px','390px']} translateY={['0px','-15px']}>
                    <img src="image/b1.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px','0px']} translateY={['0px','-15px']}>
                    <img src="image/b2.jpg" />
                </Parallax>
            </div>

            <div className={styles.card1}>
                <Parallax translateX={['0px','-400px']} translateY={['0px','-15px']}>
                    <img src="image/b3.jpg" />
                </Parallax>
            </div>
        </div>

        

    )
}

export default Card;