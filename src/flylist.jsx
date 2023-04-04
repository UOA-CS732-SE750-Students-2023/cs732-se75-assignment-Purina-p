import { useParallax, ParallaxProvider, Parallax } from 'react-scroll-parallax';
import styles from './flylist.module.css'

function Flylist() {
    const parallax = useParallax ({
        easing: 'easeOutQuad',
        translateX: [-120, 100],
    });
    return (
        <div ref={parallax.ref} className={styles.fly}>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
        </div>

    )
}

export default Flylist;