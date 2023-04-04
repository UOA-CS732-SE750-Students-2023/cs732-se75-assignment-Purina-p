import { useParallax, ParallaxProvider, Parallax } from 'react-scroll-parallax';
import styles from './flylist.module.css'

function Flylist() {
    const parallax_1 = useParallax({
        easing: [1, -0.75, 0.5, 1.34],
        translateX: [0, 100],
    });
    const parallax_2 = useParallax({
        easing: [1, -0.75, 0.5, 1.34],
        translateX: [0, 100],
    });
    const parallax_3 = useParallax({
        easing: [1, -0.75, 0.5, 1.34],
        translateX: [0, 100],
    });
    return (
        <div className={styles.fly}>
            <div className={styles.word}>
                <p ref={parallax_1.ref}>Componets</p>
                <p ref={parallax_2.ref}>Scroll Effects! Advanced Banners!</p>
                <p ref={parallax_3.ref}>Easing Animation! Aptros</p>
            </div>
            <div className={styles.bg}>
                <Parallax translateX={['0px','100px']} translateY={['0px','50px']}>
                    <img src="image/bg.svg" />
                </Parallax>
            </div>

        </div>


    )
}

export default Flylist;