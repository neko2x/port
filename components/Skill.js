import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from '../styles/TechSkills.module.css'
const Skill = ({icon,text}) => {
    return (
        // <div id={styles.alldivs}>
        //     <FontAwesomeIcon   icon={icon} id={styles.icon}/>
        //     <h2 id={styles.h2}>{text}</h2>
        // </div>
        <div className={styles.shapesection}>
        <div id={styles.diamondshape}>
            <FontAwesomeIcon className={styles.itemcount}  icon={icon} id={styles.icon}/>
         
        </div>
           <h2 id={styles.h2} className="text-center">{text}</h2>
           </div>
        )
}

export default Skill
