import React, { useState, useEffect, useMemo } from 'react';
import styles from './Hero.module.css';

const Hero = () => {

    const baseText = "Enabling ";
    const targetWords = useMemo(() => ["Better", "Superior", "Improved", "Enhanced", "Advanced"], []);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const currentWord = targetWords[currentWordIndex];
      const maxDelay = isDeleting ? 300 : 500; // Slower typing and deleting
  
      const timer = setTimeout(() => {
        if (!isDeleting) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
  
          if (displayText.length + 1 === currentWord.length) {
            setIsDeleting(true);
            clearTimeout(timer);
            setTimeout(() => {}, 2500); // pause before deleting
          }
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
  
          if (displayText.length - 1 === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((currentWordIndex + 1) % targetWords.length);
          }
        }
      }, maxDelay);
  
      return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentWordIndex, targetWords]);

    return (
        <section className={styles.hero}>
            <div className={styles.heroLeft}>
            <h1>
    <span className={styles.baseAndDynamicText}>
        {baseText}{displayText}
        <span className="cursor">|</span>
    </span>
    <br />
    <span className={styles.decisionText}> Decision Making</span>
</h1>

                <p>Maximise your corporate potential with high definition insights into today's reality and tomorrow's possibilities.</p>
                <div className={styles.buttons}>
                    <button className={styles.demoButton}>
                        Request Demo
                        <span className={styles.svgWrapper}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M7 17L17 7" stroke="#694E87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7 7H17V17" stroke="#694E87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </button>
                    <button className={styles.discoverButton}>
                        Discover More
                        <span className={styles.svgWrapper}>
                            {/* SVG content (if needed in the future) */}
                        </span>
                    </button>
                </div>
            </div>
            <div className={styles.heroRight}>
                {/* Content for the right half (if any) */}
            </div>
        </section>
    );
}

export default Hero;
