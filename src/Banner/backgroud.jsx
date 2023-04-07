import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import styles from './backgroud.module.css';

function Backgroud() {

    return (
        // The <ParallaxProvider /> component is meant to wrap a root level component in 
        // your application and is necessary to provide access through the React context API 
        // to the Parallax Controller.
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    {
                        image: 'https://repo.bfw.wiki/bfwrepo/images/moutain/bg.jpg', speed: -30, 
                        translateY: [0, 10],
                        opacity: [0.6, 1],        
                    },

                    {
                        translateY: [40, 150], scale: [0.5,2, 'easeOutCubic'],opacity:[1,0], speed: -20, children: (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h1 className={styles.title}>PARALLAX</h1>
                            </div>
                        )
                    },
                    { image: 'https://repo.bfw.wiki/bfwrepo/images/moutain/man.png', speed: -10, scale: [2, 0.8],opacity: [1, 0.8] },
                ]}
                className={`aspect-[2/1] ` + styles.h}
            >

            </ParallaxBanner>
        </ParallaxProvider>

    );
}

export default Backgroud;