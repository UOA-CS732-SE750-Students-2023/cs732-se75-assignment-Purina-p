import React from 'react';
import styles from './App.module.css'
import Cloud from './Banner/cloud';
import Backgroud from './Banner/backgroud';
import Display from './Intro/display';
import Flylist from './Intro/flylist';
import Card from './Summary/card';
import Welcome from './Intro/welcome';
import { ParallaxProvider } from 'react-scroll-parallax';
import Atro from './Atropos/atropos';
import Side from './Intro/side';
import Title from './Atropos/title';
import Summary from './Summary/summary';
import Description from './Summary/description_par';
import Thank from './Summary/thank';

function App() {
  return (
    <ParallaxProvider>
      <div className={styles.container}>
        <div className={styles.container_Top}>{/*横幅，下滑时，前面板块会放大，后面板块缩小*/}
          <div className={styles.backgroud}>
            <Backgroud />
          </div>
          <div className={styles.clouds}>
            <Cloud />
          </div>
        </div>

        <div className={styles.middle}>
          <div className={styles.welcome}>{/*向下移动会间距变大，放宽*/}
            <Welcome />
          </div>

          <div className={styles.paxallax}>{/*沿y轴旋转*/}
            <ParallaxProvider>
              <Display />
            </ParallaxProvider>
          </div>

          <div className={styles.side}>
            <Side />
          </div>

        </div>


        <div className={styles.list}>{/*插件运动*/}
          <ParallaxProvider>
            <Flylist />
          </ParallaxProvider>
        </div>

        <div className={styles.title}>
          <Title />
        </div>

        <div className={styles.atropos}>
          <Atro />
        </div>

        <div className={styles.summary}>
          <Summary />
        </div>

        <div className={styles.end}>
          <div className={styles.card}>{/*图片75%时拼接*/}
            <Card />
          </div>

          <div className={styles.description}>
            <Description />
          </div>

          <div className={styles.thank}>
            <Thank />
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;
