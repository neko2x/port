import React from 'react';

import styles from '../styles/Projects.module.css'

/* eslint-disable-next-line */


export function Project(props) {

  
  return (
    <div >
      <img   id={styles.imgProject} src={props.photo} alt=""/>
    <h2 className="p-2" id={styles.h2}><b>{props.text}</b></h2> 
    
    {props.path.length>0 && 
     <a href={props.path} className="btn " id={styles.btnGit}  target="_blank"> {props.buttonText} </a>
    }
         {props.url.length>0 &&  
     <a href={props.url} className="btn btn-success " id={styles.live} target="_blank"> Watch live </a>
      }
    </div>
  );
}

export default Project
