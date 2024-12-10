import React from 'react'
import { myProjects } from '../../data/myProjects';
import { Link } from 'react-router-dom';
import * as SiIcons from "react-icons/si";
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from "react-icons/fi";

export const Project = ({ id }) => {

    const { language } = useContext(LanguageContext);

    const proj = myProjects.find(p => p.id === id);

    return (
        <div className="project-item">
            <div className="mask">
                <img src={`/images/${proj.id}.png`} />
                <div className="overlay">
                    <p>{proj.description[language]}</p>
                </div>
            </div>
            <div className="project-textAndIcons">
                <span>{proj.categories}</span>
                <h4 className="subheading">{proj.name}</h4>
                <ul className="technologies flex flex-row">
                    {
                        proj.technologies &&
                        proj.technologies.map(technologie => {
                            const iconName = `Si${technologie.charAt(0).toUpperCase()}${technologie.slice(1)}`;
                            const IconComponent = SiIcons[iconName];
                            return <li key={technologie}>
                                {
                                    IconComponent ? <IconComponent size={30} title={technologie} />
                                        : <span>{technologie}</span>
                                }
                            </li>
                        })
                    }
                </ul>
                <ul className="flex flex-row">
                    <li>
                        <a href={proj.url} target="_blank" className="button-terciary">
                            <SiGithub />
                        </a>
                    </li>
                    {
                        (proj.tryUrl & proj.tryUrl !== "") ?
                        <li>
                            <a href={proj.tryUrl} target="_blank" className="button-terciary">
                                <FiExternalLink />
                            </a>
                        </li>
                        : `\t`
                    }
                </ul>
            </div>
        </div>
    )
}
