import maturska from '../public/photo/maturska.jpg';
import fax from '../public/photo/fax2.jpg';
import medresa from '../public/photo/mdresa2.jpg';
import styles from '../styles/About.module.css'
const About = () => {
    return (
        <div className="" id={styles.d} data-aos="fade-up">
            <h2 className="text-center pb-4">About me</h2>
           
                <div className="container">
                <div className="row ">
                    <div className="col-sm-12 col-lg-4   " id={styles.changeOrder2} >
                    <img src={maturska} id={styles.maturska}  alt=""/>
                    </div>
                    <div className="col-sm-12 col-lg-8    " id={styles.changeOrder1}>
                        <h6><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus nisi 
                            reiciendis natus quasi pariatur, soluta quas accusantium consectetur laborum 
                            consequuntur libero distinctio aspernatur illo eius. Maxime voluptatibus doloribus
                             eum.</p></h6>
                             
                             <h2>Education</h2>
                             <h5><img src={fax} alt="" id={styles.fax}/> Software Engineering - Politehnical Faculty Zenica </h5>
                             <h5>2018 - Present</h5>
                             <hr/>
                             <h5><img src={medresa} alt="" id={styles.medresa}/> Elči Ibrahim-pašina medresa - High school in Travnik</h5>
                             <h5>2014 - 2018</h5>
                             
                        </div>
                    
                </div>
             </div>
        </div>
    )
}

export default About
