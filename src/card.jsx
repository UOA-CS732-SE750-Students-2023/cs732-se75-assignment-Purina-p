import Atropos from 'atropos/react';
import styles from './card.module.css'

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.alone}>
                <Atropos>
                    <img src="image/yulong.png" data-atropos-offset="-5" />
                    {/* <img src="image-middle.png" data-atropos-offset="0" />
                    <img src="image-front.png" data-atropos-offset="5" /> */}
                </Atropos>
            </div>
            <div className={styles.alone}>
                <Atropos>
                    <img src="image/new.png" data-atropos-offset="-5" />
                </Atropos>
            </div>
            <div className={styles.alone}>
                <Atropos>
                    <img src="image/city.jpg" data-atropos-offset="-5" />
                </Atropos>
            </div>
            <div className={styles.alone}>
                <Atropos>
                    <img src="image/snow.jpg" data-atropos-offset="-5" />
                </Atropos>
            </div>
            <div className={styles.alone}>
                <Atropos>
                    <img src="image/yulong.png" data-atropos-offset="-5" />
                </Atropos>
            </div>
        </div>

    )
}

export default Card;