import React from 'react';
import Lottie from 'react-lottie';
import * as chartAnimation from '../assets/chart.json';
import styles from './Applications.module.css';

const Applications = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: chartAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const cardContents = [
        'Profitability, Planning and Management',
        'Capital & Cashflow Planning & Management',
        'Forecasting, Analysis & Reporting'
    ];

    return (
        <div className={styles.applications}>
            <div className={styles.header}>
                <h1 className={styles.mainTitle}>APPLICATIONS</h1>
                <p className={styles.subtext}>Get a complete, crystal clear view of your corporate performance.</p>
            </div>
            <div className={styles.cardContainer}>
                {cardContents.map((content, index) => (
                    <div key={index} className={styles.card}>
                        <Lottie options={defaultOptions}
                                height={100}
                                width={100}
                        />
                        <p className={styles.cardContent}>
                            {content}
                        </p>
                        <div className={styles.learnMore}>
                            LEARN MORE 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7 7H17V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Applications;
