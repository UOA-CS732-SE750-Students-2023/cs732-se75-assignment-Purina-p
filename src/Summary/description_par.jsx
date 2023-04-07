import styles from './description.module.css'
import { Parallax } from 'react-scroll-parallax';

function Description() {
    return (
        <Parallax translateX={['500px', '100px']} translateY={['300px', '100px']} opacity={[0.7,1]}>
            <article className={styles.container}>
                <h1 className={styles.article}>React Scroll Parallax</h1>
                <p>React components to create parallax scroll effects for banners,
                    images or any other DOM elements. Uses a single scroll listener
                    to add vertical scrolling based offsets to elements based on their
                    position in the viewport.Optimized to reduce jank on scroll and works with universal
                    (server-side rendered) React apps.</p>
                <p>
                    <code>yarn add react-scroll-parallax</code>
                </p>
                <p>
                    <code>npm i react-scroll-parallax</code>

                </p>
                <p>
                    <a className={styles.button} href="https://github.com/jscottsmith/react-scroll-parallax">View on GitHub</a>
                </p>
                <p>
                    <a className={styles.button} href="https://www.npmjs.com/package/react-scroll-parallax">View on NPM</a>
                </p>
            </article>
        </Parallax>
        
    )

}

export default Description;