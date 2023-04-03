import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

function Backgroud() {
    return (
        <ParallaxProvider>
            <ParallaxBanner
                layers={[
                    { image: 'https://repo.bfw.wiki/bfwrepo/images/moutain/bg.jpg', speed: -20 },
                    { image: 'https://repo.bfw.wiki/bfwrepo/images/moutain/man.png', speed: -10 },
                ]}
                className="aspect-[2/1]"
            >
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-8xl text-white font-thin">Hello World!</h1>
                </div>
            </ParallaxBanner>
        </ParallaxProvider>

    );
}

export default Backgroud;