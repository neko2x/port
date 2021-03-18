
import styles from '../styles/Navbar.module.css'
import {  Navbar,Nav } from "react-bootstrap"
import {useState,useEffect} from 'react'

const NavBar = ({show}) => {

    const [click,setClick]=useState(false);
 
    const [bgnav,setBgnav]=useState(false);

    const closeMobileMenu=()=>{
        setClick(false);
    }
    const handleClick=()=>{
        setClick(!click);
    }


    const onScrollChangeBg=()=>{
        var scrolled = document.scrollingElement.scrollTop;
        if(scrolled>=90){
            setBgnav(true);
        }else{
            setBgnav(false);
        }
    }


    useEffect(() => {
        
        onScrollChangeBg()
    }, [])
    if (process.browser) {

window.addEventListener("scroll",onScrollChangeBg);
    }

  
    return (
       

        <nav className="navbar-expand-lg " id={bgnav ? styles.navbg : styles.nav}    >
            <div className="container">

           

               <Navbar  bg="transparent" expand="lg">
              <Navbar.Brand className="text-light "  > <Nav.Link className=" text-light" href="#hero" id={styles.cw}>Šemsudin Bešo</Nav.Link></Navbar.Brand>
            {!click? <Navbar.Toggle className="border-0 bg-light " onClick={handleClick} aria-controls="navbar-toggle" /> : <Navbar.Toggle  onClick={handleClick} className="border-0 text-light">X</Navbar.Toggle> }  
              

            <Navbar.Collapse id="navbar-toggle">
            <Nav className="ms-auto">
           
               
           {show ? <Navbar.Toggle className="border-0 " onClick={closeMobileMenu} href="#about" aria-controls="navbar-toggle" >  
           <Nav.Link   className="text-center text-light" href="#about"  id={styles.cw} >About me</Nav.Link>
            </Navbar.Toggle> : 
           <Nav.Link   className="text-center text-light" href="#about"  id={styles.cw}>    About me</Nav.Link>
            }


            {show ? <Navbar.Toggle className="border-0 " onClick={closeMobileMenu} aria-controls="navbar-toggle" >  
           <Nav.Link   className="text-center text-light" href="#skills" id={styles.cw}>Skills</Nav.Link>
            </Navbar.Toggle> : 
           <Nav.Link   className="text-center text-light" href="#skills" id={styles.cw}>Skills</Nav.Link>
            }


            {show ? <Navbar.Toggle className="border-0 " onClick={closeMobileMenu} aria-controls="navbar-toggle" >  
           <Nav.Link   className="text-center text-light" href="#projects" id={styles.cw} >Projects</Nav.Link>
            </Navbar.Toggle> : 
           <Nav.Link   className="text-center text-light" href="#projects"  id={styles.cw}>Projects</Nav.Link>
            }

            {show ? <Navbar.Toggle className="border-0 " onClick={closeMobileMenu} aria-controls="navbar-toggle" >  
           <Nav.Link   className="text-center text-light" href="#contact" id={styles.cw} >Contact</Nav.Link>
            </Navbar.Toggle> : 
           <Nav.Link   className="text-center text-light" href="#contact"  id={styles.cw}>Contact</Nav.Link>
            }

              </Nav>
            </Navbar.Collapse>
             
              </Navbar>
            </div> 
          
         </nav> 
       
                 

    )
}

export default NavBar
