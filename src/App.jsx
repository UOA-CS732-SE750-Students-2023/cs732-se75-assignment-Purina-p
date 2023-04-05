import React from 'react';
import styles from './App.module.css'
import Cloud from './cloud';
import Backgroud from './backgroud';
import Display from './display';
import Flylist from './flylist';
import Card from './card';
import Welcome from './welcome';
import { ParallaxProvider } from 'react-scroll-parallax';
import Atro from './atropos';

function App() {
  return (
    <ParallaxProvider>
      <div className={styles.container}>
        {/* moutain,people and clouds */}
        <div className={styles.container_Top}>
          <div className={styles.backgroud}>{/*图片只显示了一半不知道怎么调整了，效果就是渐进下滑这个效果->https://react-scroll-parallax.damnthat.tv/docs/examples/advanced-banners*/}
            <Backgroud />
          </div>
          <div className={styles.clouds}>
            <Cloud />
          </div>
        </div>

        <div className={styles.welcome}>{/*向下移动会间距变大，放宽*/}
          <Welcome />
        </div>

        <div className={styles.paxallax}>{/*沿y轴旋转*/}
          <ParallaxProvider>
            <Display />
          </ParallaxProvider>
        </div>

        <div className={styles.list}>{/*Flylist插件不运动-->https://react-scroll-parallax.damnthat.tv/docs/examples/easing*/}
          <ParallaxProvider>
            <Flylist />
          </ParallaxProvider>
        </div>

        <div className={styles.atropos}>
          <Atro/>
        </div>

        <div>
        <h1>hello world</h1>
        </div>

        <div className={styles.card}>{/*图片还没有调到适当大小，转弯排列*/}
          <Card />
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
