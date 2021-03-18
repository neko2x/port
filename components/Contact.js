import styles from '../styles/Contact.module.css'
import emailjs from 'emailjs-com';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Contact = () => {

    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_j2it4ux', e.target, 'user_4xBkPfYeBc80WGWFt2xLE')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
        <div className="" id={styles.d} data-aos="fade-up">
            <h2 className="text-center pb-4">Contact</h2>
           
                <div className="container">
                <div className="row ">
                    <div className="col-lg-4 col-sm-12 text-center"  id={styles.firstDiv}>
                        <h4>Feel free to contact me </h4>
                        <h6>I am allways looking forward to start projects with you!</h6>
                        <a  href="https://www.linkedin.com/in/semsudin-beso-b1a314185/" target="_blank">
                             <FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.contactIcons} />
                            </a>
                            <a  href="https://github.com/BesoSE" target="_blank">
                        <FontAwesomeIcon icon={["fab", "github"]} className={styles.contactIcons} />
                        </a>
                        <br/>
                        <b><i>semso2612@gmail.com</i></b>

                    </div>







                    <div className="col-lg-8 col-sm-12" >
                    <form className="send" onSubmit={sendEmail}>
               
               <div className="form-group pt-2">
                  <b> <label htmlFor="" className="mb-1">Your name:</label></b>
                   <input type="text" className="form-control"  placeholder="Enter your name" name="name" required  />
                   
               </div>
               <div className="form-group pt-2">
               <b> <label htmlFor="" className="mb-1">Subject:</label></b>
                   <input type="text"  placeholder="Enter subject" className="form-control"   name="subject" required autoFocus/>
                   
               </div>

               <div className="form-group pt-2">
               <b> <label htmlFor="" className="mb-1">Your email:</label></b>
                   <input type="email"  placeholder="Enter your email" className="form-control"   name="email" required autoFocus/>
                   
               </div>

               <div className="form-group pt-2">
               <b> <label htmlFor="" className="mb-1">Your message:</label></b>
                  <textarea placeholder="Enter your message" cols="30" rows="8" className="form-control" name="message" required autoFocus="autofocus"/>
                 
               </div>
        
               <input type="submit" value="Send Message" className="btn btn-dark mt-3 " id={styles.btnBg}/>
           </form>
                             
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact
