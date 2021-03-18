import OtherSkill from "./OtherSkill"
import styles from '../styles/OtherSkills.module.css'


const OtherSkills = ({show}) => {
    return (
        <div className="container-fluid p-4" style={{  backgroundColor: 'rgb(233, 229, 229)'}}>
            <h2 className="text-center ">Other Skills</h2>
            <div className="row mt-5 ">


            <div className={show==false?  " d-flex  justify-content-around" : "d-block"} >


            <div className="col-xl-1 col-lg-0" ></div>
                <div className="col-lg-2 col-md-12">
               <OtherSkill icon={["fas", "sitemap"]} text="Organisation skills"/>
               </div>
               <div className="col-lg-2 ">
                   <OtherSkill icon={["fas", "users"]} text="Team player"/>
                   </div>
               <div className="col-lg-2 ">
                   <OtherSkill icon={["fas", "bullseye"]} text="Motivated"/>
                   </div>
               <div className="col-lg-2 ">
                   <OtherSkill icon={["fas", "handshake"]} text="Loyal"/>
                   </div>
               <div className="col-lg-2 ">
                   <OtherSkill icon={["fas", "puzzle-piece"]} text="Problem solving"/> 
           
                   </div>
                   <div className="col-xl-1 col-lg-0"></div>
            </div>
            </div>
        </div>
    )
}

export default OtherSkills
