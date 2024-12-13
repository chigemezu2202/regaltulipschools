import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "./../assets/images/slides/slide01.jpg";
import image2 from "./../assets/images/slides/slide02.jpg";
import image3 from "./../assets/images/slides/slide03.jpg";
import image4 from "./../assets/images/slides/slide04.jpg";
import image5 from "./../assets/images/slides/slide05.jpg";
import image6 from "./../assets/images/slides/slide06.jpg";
import image7 from "./../assets/images/slides/slide07.jpg";
import image8 from "./../assets/images/slides/slide08.jpg";
import image9 from "./../assets/images/slides/slide09.jpg";
import image10 from "./../assets/images/slides/slide10.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        speed={3000}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)} // Capture the active slide index
        className="relative mySwiper custom-swiper z-0"
      >
        <SwiperSlide className="relative">
          {" "}
          <img
            className={`slide  ${
              0 === activeSlide
                ? "fade-in"
                : 0 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image1}
            alt=""
          />{" "}
          {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-black/90 to-sky-600/50"></div> */}
          <div
            className={`bg-gradient-to-br p-3 from-black/90 to-sky-600/50 h-full md:hidden flex w-[40%]  flex-col items-center justify-center relative  gap-4 text-left md:items-start md:p-8 md:text-left `}
          >
            <h1 className="text-2xl md:text-4xl text-gray-300 font-black ">
              The Future Is Now
            </h1>
            <p className="text-base text-slate-400 font-black text-center ">
              "The best way to predict the future is to create it" - Abraham
              Lincoln
            </p>
            <div className="">
              <ul className="flex list-inside list-disc flex-col gap-2 text-[#272727] md:gap-4">
                <li className="font-bold text-sm text-center">
                  Today we stand at the threshold of limitless possibilities.
                </li>
                <li className="font-bold text-sm text-center">
                  "The Future Is Now" is more than a phrase- it is a call to
                  action.
                </li>
                <li className="font-bold text-sm text-center">
                  It's a reminder that our decisions, actions, and innovations
                  shape tommorrow.
                </li>
              </ul>
            </div>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                <NavLink to={"/about"}> know more </NavLink>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-sky-600/50 to-black/90"></div> */}
          <div
            className={`bg-gradient-to-br p-3 from-black/90 to-sky-600/50 h-full md:hidden flex w-[40%]  flex-col items-center justify-center relative  gap-4 text-left md:items-start md:p-8 md:text-left `}
          >
            <h1 className="text-2xl md:text-4xl text-gray-300 font-black ">
              The Future Is Now
            </h1>
            <p className="text-base text-slate-400 font-black text-center ">
              "The best way to predict the future is to create it" - Abraham
              Lincoln
            </p>
            <div className="">
              <ul className="flex list-inside list-disc flex-col gap-2 text-[#272727] md:gap-4">
                <li className="font-bold text-sm text-center">
                  Today we stand at the threshold of limitless possibilities.
                </li>
                <li className="font-bold text-sm text-center">
                  "The Future Is Now" is more than a phrase- it is a call to
                  action.
                </li>
                <li className="font-bold text-sm text-center">
                  It's a reminder that our decisions, actions, and innovations
                  shape tommorrow.
                </li>
              </ul>
            </div>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                <NavLink to={"/about"}> know more </NavLink>
              </button>
            </div>
          </div>
          <img
            className={`slide ${
              1 === activeSlide
                ? "fade-in"
                : 1 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`slide ${
              2 === activeSlide
                ? "fade-in"
                : 2 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image3}
            alt=""
          />
          {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-black/90 to-sky-600/50"></div> */}
          <div
            className={`bg-gradient-to-br p-3 from-black/90 to-sky-600/50 h-full md:hidden flex w-[40%]  flex-col items-center justify-center relative  gap-4 text-left md:items-start md:p-8 md:text-left `}
          >
            <h1 className="text-2xl md:text-4xl text-gray-300 font-black ">
              The Future Is Now
            </h1>
            <p className="text-base text-slate-400 font-black text-center ">
              "The best way to predict the future is to create it" - Abraham
              Lincoln
            </p>
            <div className="">
              <ul className="flex list-inside list-disc flex-col gap-2 text-[#272727] md:gap-4">
                <li className="font-bold text-sm text-center">
                  Today we stand at the threshold of limitless possibilities.
                </li>
                <li className="font-bold text-sm text-center">
                  "The Future Is Now" is more than a phrase- it is a call to
                  action.
                </li>
                <li className="font-bold text-sm text-center">
                  It's a reminder that our decisions, actions, and innovations
                  shape tommorrow.
                </li>
              </ul>
            </div>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                <NavLink to={"/about"}> know more </NavLink>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-sky-600/50 to-black/90"></div> */}
          <div
            className={`bg-gradient-to-br p-3 from-black/90 to-sky-600/50 h-full md:hidden flex w-[40%]  flex-col items-center justify-center relative  gap-4 text-left md:items-start md:p-8 md:text-left `}
          >
            <h1 className="text-2xl md:text-4xl text-gray-300 font-black ">
              The Future Is Now
            </h1>
            <p className="text-base text-slate-400 font-black text-center ">
              "The best way to predict the future is to create it" - Abraham
              Lincoln
            </p>
            <div className="">
              <ul className="flex list-inside list-disc flex-col gap-2 text-[#272727] md:gap-4">
                <li className="font-bold text-sm text-center">
                  Today we stand at the threshold of limitless possibilities.
                </li>
                <li className="font-bold text-sm text-center">
                  "The Future Is Now" is more than a phrase- it is a call to
                  action.
                </li>
                <li className="font-bold text-sm text-center">
                  It's a reminder that our decisions, actions, and innovations
                  shape tommorrow.
                </li>
              </ul>
            </div>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                <NavLink to={"/about"}> know more </NavLink>
              </button>
            </div>
          </div>
          <img
            className={`slide ${
              3 === activeSlide
                ? "fade-in"
                : 3 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`slide ${
              4 === activeSlide
                ? "fade-in"
                : 4 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image5}
            alt=""
          />
          {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-black/90 to-sky-600/50"></div> */}
          <div
            className={`bg-gradient-to-br p-3 from-black/90 to-sky-600/50 h-full md:hidden flex w-[40%]  flex-col items-center justify-center relative  gap-4 text-left md:items-start md:p-8 md:text-left `}
          >
            <h1 className="text-2xl md:text-4xl text-gray-300 font-black ">
              The Future Is Now
            </h1>
            <p className="text-base text-slate-400 font-black text-center ">
              "The best way to predict the future is to create it" - Abraham
              Lincoln
            </p>
            <div className="">
              <ul className="flex list-inside list-disc flex-col gap-2 text-[#272727] md:gap-4">
                <li className="font-bold text-sm text-center">
                  Today we stand at the threshold of limitless possibilities.
                </li>
                <li className="font-bold text-sm text-center">
                  "The Future Is Now" is more than a phrase- it is a call to
                  action.
                </li>
                <li className="font-bold text-sm text-center">
                  It's a reminder that our decisions, actions, and innovations
                  shape tommorrow.
                </li>
              </ul>
            </div>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                <NavLink to={"/about"}> know more </NavLink>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-sky-600/50 to-black/90"></div> */}
          <div
            className={`bg-gradient-to-br p-3 from-black/90 to-sky-600/50 h-full md:hidden flex w-[40%]  flex-col items-center justify-center relative  gap-4 text-left md:items-start md:p-8 md:text-left `}
          >
            <h1 className="text-2xl md:text-4xl text-gray-300 font-black ">
              The Future Is Now
            </h1>
            <p className="text-base text-slate-400 font-black text-center ">
              "The best way to predict the future is to create it" - Abraham
              Lincoln
            </p>
            <div className="">
              <ul className="flex list-inside list-disc flex-col gap-2 text-[#272727] md:gap-4">
                <li className="font-bold text-sm text-center">
                  Today we stand at the threshold of limitless possibilities.
                </li>
                <li className="font-bold text-sm text-center">
                  "The Future Is Now" is more than a phrase- it is a call to
                  action.
                </li>
                <li className="font-bold text-sm text-center">
                  It's a reminder that our decisions, actions, and innovations
                  shape tommorrow.
                </li>
              </ul>
            </div>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                <NavLink to={"/about"}> know more </NavLink>
              </button>
            </div>
          </div>
          <img
            className={`slide ${
              5 === activeSlide
                ? "fade-in"
                : 5 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image6}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`slide ${
              6 === activeSlide
                ? "fade-in"
                : 6 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image7}
            alt=""
          />
          {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-black/90 to-sky-600/50"></div> */}
          <div
            className={`bg-gradient-to-br p-3 from-black/90 to-sky-600/50 h-full md:hidden flex w-[40%]  flex-col items-center justify-center relative  gap-4 text-left md:items-start md:p-8 md:text-left `}
          >
            <h1 className="text-2xl md:text-4xl text-gray-300 font-black ">
              The Future Is Now
            </h1>
            <p className="text-base text-slate-400 font-black text-center ">
              "The best way to predict the future is to create it" - Abraham
              Lincoln
            </p>
            <div className="">
              <ul className="flex list-inside list-disc flex-col gap-2 text-[#272727] md:gap-4">
                <li className="font-bold text-sm text-center">
                  Today we stand at the threshold of limitless possibilities.
                </li>
                <li className="font-bold text-sm text-center">
                  "The Future Is Now" is more than a phrase- it is a call to
                  action.
                </li>
                <li className="font-bold text-sm text-center">
                  It's a reminder that our decisions, actions, and innovations
                  shape tommorrow.
                </li>
              </ul>
            </div>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                <NavLink to={"/about"}> know more </NavLink>
              </button>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-black/90 to-sky-600/50"></div> */}
          <div
            className={`bg-gradient-to-br p-3 from-black/90 to-sky-600/50 h-full md:hidden flex w-[40%]  flex-col items-center justify-center relative  gap-4 text-left md:items-start md:p-8 md:text-left `}
          >
            <h1 className="text-2xl md:text-4xl text-gray-300 font-black ">
              The Future Is Now
            </h1>
            <p className="text-base text-slate-400 font-black text-center ">
              "The best way to predict the future is to create it" - Abraham
              Lincoln
            </p>
            <div className="">
              <ul className="flex list-inside list-disc flex-col gap-2 text-[#272727] md:gap-4">
                <li className="font-bold text-sm text-center">
                  Today we stand at the threshold of limitless possibilities.
                </li>
                <li className="font-bold text-sm text-center">
                  "The Future Is Now" is more than a phrase- it is a call to
                  action.
                </li>
                <li className="font-bold text-sm text-center">
                  It's a reminder that our decisions, actions, and innovations
                  shape tommorrow.
                </li>
              </ul>
            </div>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                <NavLink to={"/about"}> know more </NavLink>
              </button>
            </div>
          </div>{" "}
          <img
            className={`slide ${
              7 === activeSlide
                ? "fade-in"
                : 7 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image8}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className={`slide ${
              8 === activeSlide
                ? "fade-in"
                : 8 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image9}
            alt=""
          />
          {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-sky-600/50 to-black/90"></div> */}
          <div
            className={`bg-gradient-to-br p-3 from-black/90 to-sky-600/50 h-full md:hidden flex w-[40%]  flex-col items-center justify-center relative  gap-4 text-left md:items-start md:p-8 md:text-left `}
          >
            <h1 className="text-2xl md:text-4xl text-gray-300 font-black ">
              The Future Is Now
            </h1>
            <p className="text-base text-slate-400 font-black text-center ">
              "The best way to predict the future is to create it" - Abraham
              Lincoln
            </p>
            <div className="">
              <ul className="flex list-inside list-disc flex-col gap-2 text-[#272727] md:gap-4">
                <li className="font-bold text-sm text-center">
                  Today we stand at the threshold of limitless possibilities.
                </li>
                <li className="font-bold text-sm text-center">
                  "The Future Is Now" is more than a phrase- it is a call to
                  action.
                </li>
                <li className="font-bold text-sm text-center">
                  It's a reminder that our decisions, actions, and innovations
                  shape tommorrow.
                </li>
              </ul>
            </div>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                <NavLink to={"/about"}> know more </NavLink>
              </button>
            </div>
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-br from-sky-600/50 to-black/90"></div> */}
          <div
            className={`bg-gradient-to-br p-3 from-black/90 to-sky-600/50 h-full md:hidden flex w-[40%]  flex-col items-center justify-center relative  gap-4 text-left md:items-start md:p-8 md:text-left `}
          >
            <h1 className="text-2xl md:text-4xl text-gray-300 font-black ">
              The Future Is Now
            </h1>
            <p className="text-base text-slate-400 font-black text-center ">
              "The best way to predict the future is to create it" - Abraham
              Lincoln
            </p>
            <div className="">
              <ul className="flex list-inside list-disc flex-col gap-2 text-[#272727] md:gap-4">
                <li className="font-bold text-sm text-center">
                  Today we stand at the threshold of limitless possibilities.
                </li>
                <li className="font-bold text-sm text-center">
                  "The Future Is Now" is more than a phrase- it is a call to
                  action.
                </li>
                <li className="font-bold text-sm text-center">
                  It's a reminder that our decisions, actions, and innovations
                  shape tommorrow.
                </li>
              </ul>
            </div>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                <NavLink to={"/about"}> know more </NavLink>
              </button>
            </div>
          </div>{" "}
          <img
            className={`slide ${
              9 === activeSlide
                ? "fade-in "
                : 9 === (activeSlide - 1 + 3) % 3 // Previous slide
                ? "fade-out"
                : "fade-out"
            }`}
            src={image10}
            alt=""
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
