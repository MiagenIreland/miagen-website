import React from 'react';
import styles from './OurSolutions.module.css';
import { useNavigate } from 'react-router-dom';


// Replace these with your actual image imports
import PlanagenImg from '../assets/planagen.jpg';
import LeasegenImg from '../assets/pexels-pavel-danilyuk-8112186.jpg';
import GreengenImg from '../assets//pexels-thamyres-müller-2125600.jpg';
import SeagenImg from '../assets/seagen.jpg';
import RoutegenImg from '../assets/routegen.jpg';

// You'll also need to import your icons
import PlanagenIcon from '../assets/icons8-plan.svg';
import LeasegenIcon from '../assets/icons8-lease.svg';
import GreengenIcon from '../assets/icons8-environmental-planning.svg';
import SeagenIcon from '../assets/icons8-ship.svg';
import RoutegenIcon from '../assets/icons8-plane.svg';

const solutionsData = [
    {
        image: PlanagenImg,
        title: "PlanaGen",
        description: "For Financial Planning",
        icon: PlanagenIcon
    },
    {
        image: LeasegenImg,
        title: "LeaseGen",
        description: "For Aviation Leasing",
        icon: LeasegenIcon
    },
    {
        image: GreengenImg,
        title: "GreenGen",
        description: "ESG",
        icon: GreengenIcon
    },
    {
        image: SeagenImg,
        title: "SeaGen",
        description: "For Shipping",
        icon: SeagenIcon
    },
    {
        image: RoutegenImg,
        title: "RouteGen",
        description: "For Airlines",
        icon: RoutegenIcon
    },
];

const OurSolutions = () => {
    const navigate = useNavigate();

    const handleSolutionClick = (path) => {
        navigate(path);
    };

    return (
        <div className={styles['our-solutions']}>
            <h2>Our Solutions</h2>
            <div className={styles['solutions-list']}>
                {solutionsData.map((solution, index) => (
                    <div 
                        key={index} 
                        className={styles['solution-item']}
                        onClick={() => handleSolutionClick(`/solutions/${solution.title.toLowerCase()}`)}
                    >
                        <img src={solution.image} alt={solution.title} className={styles['solution-image']} />
                        <div className={styles['solution-content']}>
                            <h3>{solution.title}</h3>
                            <p>{solution.description}</p>
                            <img className={styles['solution-icon']} src={solution.icon} alt={`${solution.title} icon`} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default OurSolutions;