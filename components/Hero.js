import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import video from '../public/video/vid.mp4'
import styles from '../styles/Hero.module.css'


const Hero = ({prefix}) => {
    useEffect(() => {
        showText();
    }, [])

    const text="I'm Šemsudin Bešo software enginnering student and web developer.";
    var i=0;
    const showText=()=>{
        

       if(i<text.length){
            document.getElementById("text").innerHTML+=text.charAt(i);
            i++;
            setTimeout(showText,50);
          
         
        }
        
    }
    
 
    return (
        <div id={styles.d} >  
            <div className="d-flex justify-content-center" id={styles.forText}> <h1 className="text-light text-center" id="text"> </h1></div>
            
            <div className="d-flex justify-content-center">
            <a href="#about" id={styles.btn} className="btn btn-light mt-4 "> <FontAwesomeIcon style={{width:"15px",marginBottom:'2px'}}   icon={["fas", "user-tie"]} />  Meet me</a>
            </div>   
          <video autoPlay loop muted  className={styles.video}>
   
                <source src={video} type="video/mp4" className={styles.video}/>
                
            </video >    
        </div>
    )
}

export default Hero
