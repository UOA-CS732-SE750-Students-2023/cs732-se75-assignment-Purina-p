import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import styles from './backgroud.module.css';

function Backgroud() {

    return (
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    {
                        image: 'https://repo.bfw.wiki/bfwrepo/images/moutain/bg.jpg', speed: -30, 
                        translateY: [0, 10],
                        opacity: [0.1, 1],        
                    },

                    {
                        translateY: [0, 150], scale: [0.5,1.5, 'easeOutCubic'], speed: -20, children: (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h1 className={styles.title}>PARALLAX</h1>
                            </div>
                        )
                    },
                    { image: 'https://repo.bfw.wiki/bfwrepo/images/moutain/man.png', speed: -10, scale: [2, 0.8] },
                ]}
                className={`aspect-[2/1] ` + styles.h}
            >

            </ParallaxBanner>
        </ParallaxProvider>

    );
}

export default Backgroud;