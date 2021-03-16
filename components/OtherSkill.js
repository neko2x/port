import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import styles from '../styles/OtherSkills.module.css'
const OtherSkill = ({icon,text}) => {
    return (
        <div className={styles.shapesection} data-aos="fade-up">
        <div id={styles.diamondshape}>
            <FontAwesomeIcon className={styles.itemcount}  icon={icon} id={styles.icon}/>
         
        </div>
           <h2 id={styles.h2} className="text-center">{text}</h2>
           </div>
    )
}



export default OtherSkill
