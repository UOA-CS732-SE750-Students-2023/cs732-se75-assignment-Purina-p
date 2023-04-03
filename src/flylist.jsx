import { useParallax, ParallaxProvider } from 'react-scroll-parallax';
import styles from './flylist.module.css'

function Flylist() {
    const parallax = useParallax < HTMLDivElement > ({
        easing: 'easeOutQuad',
        translateX: [0, 100],
    });
    return (
        <ParallaxProvider>
            <div ref={parallax.ref} className={styles.list}>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
                <p>hello</p>
            </div>

        </ParallaxProvider >

    )
}

export default Flylist;