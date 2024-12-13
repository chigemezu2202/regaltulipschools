import React from "react";
import Hero from "../components/common/heroSection/Hero";
import HeroSlider from "../components/slider/HeroSlider";
import { About } from "./About";
import { Blog } from "./Blog";
import { Instructor } from "./Instructor";
import { Subjects } from "./Subjects";

export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      {/* <Subjects /> */}
      <Instructor />
      {/* <Blog /> */}
    </>
  );
};
export const HomeContent = () => {
  return (
    <>
      <HeroSlider />
    </>
  );
};
