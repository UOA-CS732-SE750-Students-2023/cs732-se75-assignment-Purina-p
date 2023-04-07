import React from 'react';
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function Side() {
    return (
        <ParallaxProvider>
            <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
                <ParallaxBannerLayer image="https://repo.bfw.wiki/bfwrepo/images/moutain/mountain_left.png" speed={-10} translateX={[5,-10]} opacity={[0,1]}/>
                <ParallaxBannerLayer image="https://repo.bfw.wiki/bfwrepo/images/moutain/mountain_right.png" speed={-10} translateX={[-5,10]} opacity={[0,1]}/> 
            </ParallaxBanner>
        </ParallaxProvider>
    );
}

export default Side;