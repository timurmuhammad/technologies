"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './index.scss';
import './reiewsSlider.scss'
import arrowSlider from '../../shared/icons/arrow-slider.svg'
import { reviews } from '../../types/reviews'

export function ReviewsSlider() {
  return (
    <div className='reviews_slider'>
      <div className="swiper">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            //clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='swiper__card_review'>
                <h3 className='swiper__review_name'>{item.name}</h3>
                <p className='swiper__review_date'>{item.date}</p>
                <p className='swiper__review_content'>
                  {item.content}
                  {item.content.length > 100 && <Link href={'/'} className='swiper__all_content'>Show more</Link>}
                  </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              {/* <div className="arrow-back-outline"></div> */}
              <img src={arrowSlider.src} alt="icon" />
            </div>
            <div className="swiper-button-next slider-arrow">
              {/* <div className="arrow-forward-outline"></div> */}
              <img src={arrowSlider.src} alt="icon" />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}






































// import "swiper/css";
// import "swiper/css/navigation";

// import { Fragment, useEffect, useRef } from "react";
// import { Autoplay, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from 'swiper';
// import arrow from '../../shared/icons/arrow-slider.svg'
// import styles from './reiewsSlider.module.scss'

// export const ReviewsSlider = () => {
//   const navigationPrevRef = useRef(null)
//   const navigationNextRef = useRef(null)

//   useEffect(() => {
//     // Устанавливаем ссылки на элементы DOM после загрузки компонента
//     if (navigationPrevRef.current && navigationNextRef.current) {
//       SwiperCore.use([Navigation]);
//       const swiper = new SwiperCore(".mySwiper", {
//         navigation: {
//           prevEl: navigationPrevRef.current,
//           nextEl: navigationNextRef.current
//         },
//       });
//     }
//   }, []);

//   return (
//     <Fragment>
//       <div
//         className={
//           "text-4xl capitalize font-bold text-center relative flex flex-col items-center mt-[60px] mb-[30px]"
//         }
//       >
//         Customer reviews
//         <div
//           className={"h-[10px] w-[360px] bg-main-yellow absolute top-[35px]"}
//         ></div>
//       </div>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         navigation={{
//           prevEl: navigationPrevRef.current,
//           nextEl: navigationNextRef.current,
//         }}
//         // onBeforeInit={(swiper) => {
//         //   swiper.navigation.nextEl = navigationNextRef.current;
//         //   swiper.navigation.prevEl = navigationPrevRef.current;
//         // }}
//         modules={[Autoplay, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className={"flex justify-evenly p-5 "}>
//             <div
//               className={
//                 "h-[200px] w-[300px] bg-white rounded-xl shadow p-3 flex flex-col justify-evenly"
//               }
//             >
//               <div className={"font-bold text-gray-800 text-xl"}>Richard</div>
//               <div className={"font-light text-gray-500"}>31 jan 2023</div>
//               <div className={"text-gray-950"}>
//                 I found that I want very quick. I just enter a query and get all
//                 prices for that product. I like it. Next time I will come here
//                 again! Thnx a lot!
//               </div>
//             </div>
//             <div
//               className={
//                 "h-[200px] w-[300px] bg-white rounded-xl shadow p-3 flex flex-col justify-evenly"
//               }
//             >
//               <div className={"font-bold text-gray-800 text-xl"}>Anita</div>
//               <div className={"font-light text-gray-500"}>31 jan 2023</div>
//               <div className={"text-gray-950"}>
//                 It was amazing! I spend five minutes on my search. Really
//                 recommend this site.Very good!
//               </div>
//             </div>
//             <div
//               className={
//                 "h-[200px] w-[300px] bg-white rounded-xl shadow p-3 flex flex-col justify-evenly"
//               }
//             >
//               <div className={"font-bold text-gray-800 text-xl"}>Harold</div>
//               <div className={"font-light text-gray-500"}>31 jan 2023</div>
//               <div className={"text-gray-950"}>
//                 I found that I want very quick. I just enter a query and get all
//                 prices for that product. I like it. Next time I will come here
//                 again!
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className={"flex justify-evenly p-5 "}>
//             <div
//               className={
//                 "h-[200px] w-[300px] bg-white rounded-xl shadow p-3 flex flex-col justify-evenly"
//               }
//             >
//               <div className={"font-bold text-gray-800 text-xl"}>Richard</div>
//               <div className={"font-light text-gray-500"}>31 jan 2023</div>
//               <div className={"text-gray-950"}>
//                 I found that I want very quick. I just enter a query and get all
//                 prices for that product. I like it. Next time I will come here
//                 again! Thnx a lot!
//               </div>
//             </div>
//             <div
//               className={
//                 "h-[200px] w-[300px] bg-white rounded-xl shadow p-3 flex flex-col justify-evenly"
//               }
//             >
//               <div className={"font-bold text-gray-800 text-xl"}>Anita</div>
//               <div className={"font-light text-gray-500"}>31 jan 2023</div>
//               <div className={"text-gray-950"}>
//                 It was amazing! I spend five minutes on my search. Really
//                 recommend this site.Very good!
//               </div>
//             </div>
//             <div
//               className={
//                 "h-[200px] w-[300px] bg-white rounded-xl shadow p-3 flex flex-col justify-evenly"
//               }
//             >
//               <div className={"font-bold text-gray-800 text-xl"}>Harold</div>
//               <div className={"font-light text-gray-500"}>31 jan 2023</div>
//               <div className={"text-gray-950"}>
//                 I found that I want very quick. I just enter a query and get all
//                 prices for that product. I like it. Next time I will come here
//                 again!!!
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//         <div className={styles.button_prev} ref={navigationPrevRef}><img src={arrow.src} alt="" /></div>
//         <div className={styles.button_next} ref={navigationNextRef}><img src={arrow.src} alt="" /></div> 
//       </Swiper>
//       <div className={"mt-10 flex justify-center"}>
//         <div
//           className={
//             "h-[200px] w-[300px] bg-white rounded-xl shadow p-3 flex flex-col justify-evenly items-center"
//           }
//         >
//           <div className={"font-bold text-gray-800 text-xl"}>You review</div>
//           <div className={"text-gray-950"}>Tell about your experience</div>
//           <div
//             className={
//               "w-[176px] h-[48px] bg-main-yellow rounded shadow flex justify-center items-center"
//             }
//           >
//             <b>Add review</b>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };
