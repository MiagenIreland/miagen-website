import React from 'react';
import Lottie from 'react-lottie';
import styles from './HowWeDoItComponent.module.css';
import HandshakeData from '../assets/animation_lnkqw5va.json';
import SettingsData from '../assets/animation_lnkr3kws.json';

const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: HandshakeData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: SettingsData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const HowWeDoComponent = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>HOW WE DO IT</h2>
            
            <div className={styles.cards}>
                <div className={styles.card1}>
                    <p>Complete insight into true dynamics of operational performance and profitability.</p>
                </div>
                
                <div className={styles.card}>
    <Lottie options={defaultOptions1}
            height={120}
            width={120}
            className={styles.invertedColor}
    />
    <h3 className={styles.cardTitle}>TEAM OF CONSULTANTS</h3>
    <p>Miagen delivers business planning, data integration and process improvements. Our team of consultants build customised models specific to client needs and deliver them through industry leading cloud-based technology partners.</p>
</div>

                
<div className={styles.card}>
    <Lottie options={defaultOptions2}
            height={120}
            width={120}
            className={styles.invertedColor}
    />
    <h3 className={styles.cardTitle}>OPERATIONAL PERFORMANCE</h3>
    <p>Our solutions include Enterprise Planning, Corporate Performance Management, Business Intelligence, Financial Close and Integration helping clients transform their business, drive operational performance and profitability.</p>
</div>

            </div>
            <button className={styles.howWeDoButton}>HOW WE DO IT</button>
        </section>
    );
}

export default HowWeDoComponent;
