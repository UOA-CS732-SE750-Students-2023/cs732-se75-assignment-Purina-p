import Atropos from 'atropos/react';
import styles from './atropos.module.css'

function Atro() {
    return (
        <div className={styles.atro}> 
            <div style={{ width: '100%' }}>
                <div className={styles.myAtropos}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(val => {

                            return <Atropos
                                key={val}
                                className={styles.atropos + ' atropos-multiple'}//atropos-multiple把九张图片绑定的类
                                alwaysActive
                                commonOrigin={true}
                                rotateTouch="scroll-y"
                                rotateXInvert
                                rotateYInvert
                                stretchX={20}
                                stretchY={30}
                                rotateXMax={10}
                                rotateYMax={10}
                                duration={400}
                                eventsEl=".atropos-multiple"
                            >
                                <div data-atropos-offset="10" className={styles.multipleBg}></div>
                            </Atropos>
                        })
                    }
                </div>
            </div>

        </div>

    )
}

export default Atro;