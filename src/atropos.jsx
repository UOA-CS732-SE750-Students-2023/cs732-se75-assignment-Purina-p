import Atropos from 'atropos/react';
import styles from './atropos.module.css'

function Atro() {
    return (
        <div className={styles.atro}>
            <h1>Atropos</h1>
            <div style={{ width: '100%' }}>
                <div className={styles.myAtropos + ' atropos-multiple'}>
                    {/* atropos-multiple把这9个元素绑在一个特定的的类的元素上 */}
                    {
                        [
                            'image/sky1.jpg',
                            'image/sky2.jpg',
                            'image/sky3.jpg',
                            'image/m1.jpg',
                            'image/m2.jpg',
                            'image/m3.jpg',
                            'image/b1.jpg',
                            'image/b2.jpg',
                            'image/b3.jpg'

                        ].map(val => {

                            return <Atropos
                                key={val}
                                className={styles.atropos}
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
                                <div data-atropos-offset="10" className={styles.multipleBg}
                                    style={{ backgroundImage: `url(${val})` }}></div>
                            </Atropos>
                        })
                    }
                </div>
            </div>

        </div>

    )
}

export default Atro;