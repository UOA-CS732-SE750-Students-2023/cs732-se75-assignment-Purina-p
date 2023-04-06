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
                <div ref={parallax_1.ref}>Componets</div>
                <div ref={parallax_2.ref} className={styles.com1}>
                    <a href="https://react-scroll-parallax.damnthat.tv/docs/examples/scroll-effects">
                        <span>Scroll Effects! Advanced Banners!</span>
                    </a></div>
                <div ref={parallax_3.ref} className={styles.com2}>
                <a href="https://react-scroll-parallax.damnthat.tv/docs/examples/scroll-effects">
                        <span>Easing Animation! Aptros!</span>
                    </a></div>
            </div>
            <div className={styles.bg}>
                <div className={styles.front}>
                    <Parallax translateX={['0px', '100px']} translateY={['0px', '50px']}>
                        <img src="image/bg.svg" />
                    </Parallax>
                </div>
            </div>

        </div>


    )
}

export default Flylist;