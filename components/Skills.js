import React from 'react'
import OtherSkills from './OtherSkills'
import TechSkills from './TechSkills'

const Skills = ({show}) => {
    
    return (
        <div >
           
           <TechSkills show={show}/>
           <OtherSkills show={show}/> 
        </div>
    )
}

export default Skills
