import Skill from "./Skill"
import {useState,useEffect} from 'react'
import styles from '../styles/TechSkills.module.css'


const TechSkills = ({show}) => {
   

   
    return (
        <div id={styles.maindiv} className="container-fluid" >
      
             <h1 className="text-center pt-4" id={styles.h1}>Skills</h1>
            <div className="row mt-5" id={styles.rowdiv}>
                <div className="col-lg-12 " id={styles.Firstdiv}>
                <div  className={show==false?  " col-lg-12 col-md-12 d-flex mb-5":  " col-lg-6 col-md-12 d-block"} >


                    <div className=" col-lg-6 d-flex justify-content-around" id={styles.div3} data-aos="fade-up">
                    <Skill icon={["fab", "cuttlefish"]} text="C++"/>
              
                    <Skill icon={["fab", "php"]} text="Php"/>
           
                    <Skill icon={["fab", "java"]} text="Java"/>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-around" id={styles.div3} data-aos="fade-up">
                    <Skill icon={["fab", "js"]} text="JavaScript"/>
               
                    <Skill icon={["fas", "file"]} text="Spring Boot"/>
               
                    <Skill icon={["fas", "database"]} text="SQL Server" />
                    </div>
              
                </div>



                <div className={show==false?  " col-lg-12 col-md-12 d-flex mb-5":  " col-lg-6 col-md-12 d-block"}>


                <div className="col-lg-6 d-flex  justify-content-around" id={styles.div3} data-aos="fade-up">
               
                    <Skill icon={["fas", "database"]} text="MySQL"/>
               
                <Skill icon={["fab", "html5"]} text="HTML"/>

                <Skill icon={["fab", "css3"]} text="CSS"/>
                </div>

                <div className="col-lg-6  d-flex  justify-content-around" id={styles.div3} data-aos="fade-up">

                <Skill icon={["fab", "react"]} text="React"/>
    
                <Skill icon={["fab", "github"]} text="GitHub"/>

                <Skill icon={["fab", "docker"]} text="Docker"/>
               </div>
    
                </div>
                </div>
            </div>
        </div>
    )
}

export default TechSkills
