import React from "react";
import aboutImg from "../components/assets/images/about.jpg";
import school1 from "../components/assets/images/school/school1.jpg";
import school2 from "../components/assets/images/school/school2.jpg";
import aboutImgBanner from "../components/assets/images/about-edu.webp";
import imgs from "../components/assets/images/join1.png";
import { FaBookDead, FaLowVision, FaMotorcycle } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { GiMissileLauncher } from "react-icons/gi";

export const About = () => {
  return (
    <>
      <section className="py-16 about">
        <div className="container">
          <div
            className="py-12 text-center heading"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-once="false"
          >
            <h1 className="text-3xl font-semibold text-black">Core value</h1>
            <span className="block mt-2 text-sm text-center text">
              Knowledge - being in the knowledge industry, we must keep pursuing
              knowledge to exceed our customer’s expectations; we value personal
              and professional development. We also value{" "}
              <span className="font-bold">
                {" "}
                knowledge transfer, service, integrity and reliability.
              </span>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-5  sm:grid-cols-1">
            <AboutCard
              color="bg-[#8007E6]"
              icon={<FaLowVision size={50} />}
              title="Our Vision"
              desc="To inculcate in every child who passes through our school the culture of excelling in life through diligence and to instill in them human and moral values."
            />
            <AboutCard
              color="bg-[#DD246E]"
              icon={<FaMotorcycle size={50} />}
              title="Our Motto"
              desc="Raising Truly Successful Models."
            />
            <AboutCard
              color="bg-[#2D69F0]"
              icon={<GiMissileLauncher size={50} />}
              title="Our Mission"
              desc="To conscientiously teach excelling habits, high academic standards human and moral values using rich curricula and highly motivated workforce in a comfortable conducive and safe environment"
            />
          </div>
        </div>
      </section>
      <AboutContent />
      <AboutMain />
    </>
  );
};
export const AboutCard = (props) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-once="false"
       className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}
    >
      <div className="icon">{props.icon}</div>
      <div className="mt-5 text">
        <h4 className="my-3 text-lg font-semibold">{props.title}</h4>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

export const AboutContent = () => {
  return (
    <section className="mb-16">
      <div
        className="container flex md:flex-col"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-once="false"
      >
        <div className="relative w-1/3 mr-8 left md:w-full md:mr-0">
          <img src={school1} alt="aboutImg" className=" rounded-xl" />
          {/* <img src={aboutImgBanner} alt='aboutImg' className='absolute h-56 rounded-xl -bottom-14 -left-24 md:left-80' /> */}
          <div className="mt-3 ml-24 img-group">
            {/* <img src={imgs} alt="" /> */}
            {/* <span className="text-[14px]">
              Enroll your kid among{" "}
              <label className="text-sm text-black">300+</label> pupils
            </span> */}
          </div>
        </div>
        <div
          className="w-2/3 right md:w-full md:mt-16"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-once="false"
        >
          <div className="w-4/5 heading md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              Achieve Your Child's Goals At Regal Tulip
            </h1>
            <span className="block mt-2 text-sm leading-6">
              At Regal Tulip, we are dedicated to helping your child reach their
              full potential. With personalized learning plans, experienced
              teachers, and a nurturing environment, we provide the tools and
              support needed for your child to excel academically and grow
              confidently. Whether it's improving in subjects, building social
              skills, or developing new talents, Regal Tulip is the perfect
              place to inspire and achieve your child's goals. Join us today and
              watch your child thrive!
            </span>
            {/* <ul className="my-5">
              <li className="flex items-center gap-5 text-sm">
                <AiOutlineCheck className="text-green-500" /> IQ Testing.
              </li>
              <li className="flex items-center gap-5 my-2 text-sm">
                <AiOutlineCheck className="text-green-500" />
                Smartness
              </li>
              <li className="flex items-center gap-5 text-sm">
                <AiOutlineCheck className="text-green-500" />
                Intelligents
              </li>
            </ul> */}
            <button className="px-5 py-2 text-sm border border-gray-300 rounded-md">
              Enroll your child now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const AboutMain = () => {
  return (
    <section className="mb-16">
      <div className="container flex md:flex-col">
        <div
          className="w-2/3 right md:w-full md:mt-16"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-once="false"
        >
          <div className="w-4/5 heading md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              We Are The Top Notch In Academics
            </h1>
            <span className="block mt-2 text-sm leading-6">
              At Regal Tulip School, we pride ourselves on being top-notch in
              academics, fostering a culture of excellence that inspires
              students to reach their full potential. Our commitment to academic
              distinction is unwavering, driven by:
              <br />
              <br />
              <span className="font-bold">Key Strengths:</span>
              <br />
              <br />
              <span className="font-bold">Expert Faculty:</span> Highly
              qualified, passionate teachers dedicated to student success.
              <br />
              <br />
              <span className="font-bold">Rigorous Curriculum: </span>{" "}
              Challenging, well-structured programs that promote critical
              thinking.
              <br />
              <br />
              <span className="font-bold">Personalized Learning: </span>{" "}
              Tailored approaches to meet individual needs and learning styles.
              <br />
              <br />
              <span className="font-bold">Innovative Resources: </span>
              State-of-the-art technology, libraries, and facilities.
              <br />
              <br />
              <span className="font-bold">Continuous Assessment: </span> Regular
              evaluations to ensure student progress.
            </span>

            <button className="px-5 py-2 text-sm border border-gray-300 rounded-md">
              Enroll your child now
            </button>
          </div>
        </div>

        <div
          className="relative w-1/3 mr-8 left md:w-full md:mr-0"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-once="false"
        >
          <img src={school2} alt="aboutImg" className=" rounded-xl" />
          {/* <img src={aboutImgBanner} alt='aboutImg' className='absolute h-56 rounded-xl -bottom-14 -left-24 md:left-80' /> */}
          <div className="mt-3 ml-24 img-group">
            {/* <img src={imgs} alt="" /> */}
            {/* <span className="text-[14px]">
              Enroll your kid among{" "}
              <label className="text-sm text-black">300+</label> pupils
            </span> */}
          </div>
        </div>
      </div>
    </section>
  );
};
