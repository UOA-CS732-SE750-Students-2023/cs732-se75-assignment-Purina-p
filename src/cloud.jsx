import React from 'react';
import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

function Cloud() {
    return (
        <ParallaxProvider>
            <ParallaxBanner style={{ aspectRatio: '2 / 1' }}>
                <ParallaxBannerLayer image="https://repo.bfw.wiki/bfwrepo/images/moutain/clouds_1.png" speed={-30} />
                <ParallaxBannerLayer image="https://repo.bfw.wiki/bfwrepo/images/moutain/clouds_2.png" speed={-20} /> 
            </ParallaxBanner>
        </ParallaxProvider>
    );
}

export default Cloud;