import React from 'react'
import Seperator from '../Seperator'
import { SkillsData } from './skillsData'
import './Skills.css'
import SkillCard from './SkillCard';

function Skills() {
    const data = SkillsData;
    return (
        <div className="skills">
            <Seperator />
            <label className="section-title">Skills </label>
            <div className="skills-container"> 
            {data.map((skill) => {
                return (
                    <div className="skills-section">
                        <div className="skills-list">
                            <SkillCard skill={skill} />
                            </div>
                        </div>
                )
            })}
            </div>
        </div>
    )
}

export default Skills
