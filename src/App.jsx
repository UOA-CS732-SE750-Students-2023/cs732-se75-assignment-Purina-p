import React from 'react';
import styles from './App.module.css'
import Cloud from './cloud';
import Backgroud from './backgroud';
import Display from './display';
import Flylist from './flylist';
import Card from './card';

function App() {
  return (
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

      <div className={styles.welcome}>{/*没有办法延y轴旋转-->https://react-scroll-parallax.damnthat.tv/docs/examples/scroll-effects */}
        <Display />
      </div>

      <div className={styles.list}>{/*Flylist插件不运动-->https://react-scroll-parallax.damnthat.tv/docs/examples/easing*/}
        <Flylist />
      </div>

      <div className={styles.card}>{/*图片还没有调到适当大小，转弯排列*/}
        <Card/>
      </div>


      <div>
        <h1>hello world</h1>
      </div>
      <div>
        <h1>hello world</h1>
      </div>
      <div>
        <h1>hello world</h1>
      </div>
      <div>
        <h1>hello world</h1>
      </div>
      <div>
        <h1>hello world</h1>
      </div>
      <div>
        <h1>hello world</h1>
      </div>
    </div>
  );
}

export default App;
