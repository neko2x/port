import React, { useEffect, useState } from 'react';
import photo from '../public/photo/github.jpg'
import almybeton from '../public/photo/almy.jpg'
import game from '../public/photo/game.jpg'
import onlinestore from '../public/photo/onlinestrore.jpg'
import gallery from '../public/photo/sharedgallery.jpg'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Projects.module.css'
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';


import Project from './Project';



SwiperCore.use([Navigation]);
export function Projects() {
  const betonare = [
    {
      id: 1,
      text: 'Online Store - Spring Boot',
      photo:onlinestore,
      path:"https://github.com/BesoSE/OnlineStore",
      url:""
    },
    {
      id: 2,
      text: 'Almy beton - Next.js',
      photo:almybeton,
      path:"https://www.almybeton.ba/",
      url:"https://www.almybeton.ba/"
    },
    {
      id: 3,
      text: 'Game words - Java script',
      photo:game,
      path:"https://github.com/BesoSE/js-game",
      url:"https://besose.github.io/js-game/"
    },
    {
      id: 4,
      text: 'SharedGallery - PHP',
      photo:gallery,
      path:"https://github.com/BesoSE/SharedGallery",
      url:""
    },
    {
      id: 5,
      text: 'CRUD - React & Spring Boot ',
      photo:photo,
      path:"https://github.com/BesoSE/Crud-React-SpringBoot",
      url:""
    },
    {
      id: 6,
      text: 'Web news - Java',
      photo:photo,
      path:"https://github.com/BesoSE/webnovosti",
      url:""
    },
  ];

  const [slidesPerView, setSlidesPerView] = useState(2);
  const changeSlidesPerView = () => {
    if (window.innerWidth <= 991) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(2);
    }
  };

  useEffect(() => {
    changeSlidesPerView();
  }, []);
  if (process.browser) {
    window.addEventListener('resize', changeSlidesPerView);
  }
  return (
      <div id={styles.container}>
              
    <div className="container " data-aos="fade-up" >
    <h1 className=" text-light pt-4 pb-3">Projects</h1>
      <div className="row p-3 " id={styles.ProjectContainer}>
        <Swiper
          className="col-lg-12 col-md-10 col-sm-11 "
          spaceBetween={50}
          slidesPerView={slidesPerView}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {betonare.map((betonara) => (
            <SwiperSlide key={betonara.id}>
              <Project
                key={betonara.id}
                text={betonara.text}
                photo={betonara.photo}
                path={betonara.path}
                url={betonara.url}
                buttonText={'View on github'}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  
    </div>
    <div className="d-flex justify-content-center mt-4">
    <a href="https://github.com/BesoSE?tab=repositories" className="btn  btn-default" id={styles.btnAllProjects} target="_blank">View my projects</a>
</div>
 
    </div>
  );
}

export default Projects
