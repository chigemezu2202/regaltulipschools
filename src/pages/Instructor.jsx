import React from "react";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { GiEvilBook, GiWorld } from "react-icons/gi";
import CountUp from "react-countup";
import { BsStarFill, BsStarHalf, BsStars } from "react-icons/bs";

export const Instructor = () => {
  return (
    <>
      <section className="mb-16 instructor bg-black/20">
        <div className="container">
          <div
            className="w-2/3 py-12 m-auto text-center heading md:w-full"
            data-aos="fade-top"
            data-aos-duration="800"
            data-aos-once="false"
          >
            <h1 className="text-3xl font-semibold text-black">What To Note?</h1>
            <span className="text-[14px] mt-2 block">
              We hire the best teaches and intructors who know exactly what they
              are doing with years of experience in there field of career
            </span>
          </div>
          <div className="grid grid-cols-2 gap-5 content md:grid-cols-1">
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-once="false"
              className="relative overflow-hidden flex flex-col justify-around items-center rounded-lg bg-slate-400 images h-72 w-ful  before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10"
            >
              <img
                src="images/teacher1.png"
                alt=""
                className="object-center rounded-t-lg h-[140px] w-[120]"
              />
              <h2 className="text-3xl font-semibold text-sky-700">
                English Teacher
              </h2>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-once="false"
              className="relative overflow-hidden flex flex-col justify-around items-center rounded-lg bg-slate-400 images h-72 w-ful  before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10"
            >
              <img
                src="images/teacher2.png"
                alt=""
                className="object-center rounded-t-lg h-[140px] w-[120]"
              />
              <h2 className="text-3xl font-semibold text-sky-700">
                Math Teacher
              </h2>
            </div>
          </div>
          <div className="content">
            <div
              data-aos="fade-top"
              data-aos-duration="800"
              data-aos-once="false"
              className="w-2/3 py-12 m-auto text-center heading md:w-full"
            >
              <h1 className="text-3xl font-semibold text-black">
                We Are Proud
              </h1>
              <span className="text-[14px] mt-2 block">
                You don't have to struggle alone, you've got our assistance and
                help.
              </span>
            </div>
            <div className="grid grid-cols-4 gap-5 content md:grid-cols-2">
              <InstructorCard
                color="text-red-500"
                star={
                  <>
                    <BsStarFill size={15} />
                    <BsStarFill size={15} />
                    <BsStarFill size={15} />
                    <BsStarFill size={15} />
                    <BsStarHalf size={15} />
                  </>
                }
                icon={<FaUsers size={40} />}
                // rating={<CountUp end={4} suffix="" duration={8.75} />}

                desc="Pupils Intellect"
              />
              <InstructorCard
                color="text-orange-500"
                star={
                  <>
                    <BsStarFill size={15} />
                    <BsStarFill size={15} />
                    <BsStarHalf size={15} />
                    <BsStarHalf size={15} />
                    <BsStarHalf size={15} />
                  </>
                }
                icon={<GiEvilBook size={40} />}
                // rating={<CountUp end={22} suffix="+" duration={1.75} />}
                desc="Curricurial Structure"
              />
              <InstructorCard
                color="text-purple-500"
                star={
                  <>
                    <BsStarFill size={15} />
                    <BsStarFill size={15} />
                    <BsStarFill size={15} />
                    <BsStarFill size={15} />
                    <BsStarHalf size={15} />
                  </>
                }
                icon={<FaGraduationCap size={40} />}
                // rating={<CountUp end={160} suffix="+" duration={6.75} />}
                desc="Facilities"
              />
              <InstructorCard
                color="text-indigo-500"
                star={
                  <>
                    <BsStarFill size={15} />
                    <BsStarFill size={15} />
                    <BsStarFill size={15} />
                    <BsStarFill size={15} />
                    <BsStarFill size={15} />
                  </>
                }
                icon={<GiWorld size={40} />}
                // rating={<CountUp end={20} suffix="+" duration={3.75} />}
                desc="Intructors"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export const InstructorCard = (props) => {
  return (
    <div
      data-aos="fade-bottom"
      data-aos-duration="800"
      data-aos-once="false"
      className={`box p-5 py-5 rounded-md flex flex-col justify-center items-center`}
    >
      <div className={`${props.color}`}>{props.icon}</div>
      <div className="mt-2 text flex flex-col justify-center items-center">
        <h4 className="text-lg font-semibold text-orange-600 flex gap-1">
          {" "}
          {props.star}
        </h4>
        <p className="text-[15px] mt-1">{props.desc}</p>
      </div>
    </div>
  );
};
