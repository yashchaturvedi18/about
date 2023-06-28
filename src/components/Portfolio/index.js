import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, []);

    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    // Sample data for professional experience
    const professionalExperience = [
        {
            company: "Larsen and Toubro Infotech",
            position: "Product Engineer",
            duration: "March 2022 - July 2022",
            description: "Created RESTful APIs with Node.js for video conferencing product subscriptions and developed an Angular Single Page Application (SPA) using agile/scrum methodologies."
        },
        {
            company: "Tata Consultancy Services",
            position: "Web Developer",
            duration: "June 2019 - February 22",
            description: "Spearheaded development of video conferencing web applications, resorting to Java, Node.JS as server technologies, Angular as frontend technology, utilizing Redis as cache server and MySQL as the primary database."
        }
    ];

    // Sample data for education
    const education = {
        institution: "University of North Carolina at Charlotte",
        degree: "Master of Science in Computer Science",
        duration: "Aug 2022 - Present",
    };

    return (
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portfolio".split("")}
                    idx={15}
                />
            </h1>
                {/* Display Education */}
                <div className="education">
                <h2>Education</h2>
                <h3>{education.degree}</h3>
                <p>{education.institution}</p>
                <p>{education.duration}</p>
                <p>{education.description}</p>
            </div>
            {/* Display Professional Experience */}
            <div className="professional-experience">
                <h2>Professional Experience</h2>
                {professionalExperience.map((exp, idx) => (
                    <div className="experience-item" key={idx}>
                        <h3>{exp.position}</h3>
                        <p>{exp.company}</p>
                        <p>{exp.duration}</p>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>

        

            <Loader type="pacman" />
        </div>
    );
}

export default Portfolio;
