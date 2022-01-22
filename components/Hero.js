import React from "react";
import Image from "next/image";
import Hamburger from "./Hamburger";

const Hero = ({ isMobile, isOpen, setIsOpen }) => {
  return (
    <div className="h-screen bg-hero-2 bg-no-repeat bg-bottom ">
      <div className="bg-black bg-opacity-60 h-screen">
        {isMobile ? (
          <div className="grid grid-cols-5">
            <Hamburger
              className=""
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              isMobile={isMobile}
            />
          </div>
        ) : (
          <nav className="flex justify-end space-x-4 mb-8 pt-4 md:mx-16 lg:mx-32 xl:mx-56">
            <a className="text-white text-xl font-bold" href="#skills">
              Skills
            </a>
            <a className="text-white text-xl font-bold" href="#projects">
              Projects
            </a>
            <a
              className="text-white text-xl font-bold"
              href="https://docs.google.com/document/d/1AViWPEVoNdE7b-rzt1GwOy4nQCyADd2nvkMtul-VSpQ/edit?usp=sharing"
            >
              Resume
            </a>
            <a className="text-white text-xl font-bold" href="#contact">
              Contact
            </a>
          </nav>
        )}
        <div className="grid grid-cols-5 px-4 sm:px-16 md:px-20 lg:px-36 gap-y-2 md:gap-y-0">
          <div className="mb-8 md:mb-0 col-span-full md:col-span-3 grid mt-10">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-4 md:mt-10">
              Hi, I am Michael,
            </h1>
            <h1 className="text-grad text-white text-3xl sm:text-4xl  md:text-5xl font-bold underline">
              Data Analyst /
            </h1>
            <h1 className="text-grad text-white text-3xl sm:text-4xl  md:text-5xl font-bold underline">
              Full Stack Developer
            </h1>
            <p className="text-sm md:text-lg text-gray-200 mt-4">
              I graduated from Oregon State University with a Bachelors of
              Science in Economics. After college I started learning Python for
              data analysis. After learning the basics of programing, I wanted
              to learn d3.js and web development. So I learned JavaScript,
              React, CSS, HTML and started building projects. My portfolio is at
              michaelbergerson.com. For data analysis I frequently use Python,
              R, SQL, Tableau, Excel, Pandas, Tidyverse, and Plotly. For web
              development I frequently JavaScript TypeScript, React, CSS, HTML,
              Node, GraphQL, and D3.js.
            </p>
            <a
              href="#projects"
              className="bg-[#F02B2B] font-bold text-white px-4 py-2 md:px-8 md:py-4 mt-8 md:mb-0 md:mt-8 text-xl place-self-center"
            >
              View Projects
            </a>
          </div>
          <div className="col-span-full md:col-span-2  grid grid-cols-10 content-end md:place-self-center">
            <div className="grid grid col-start-5 col-end-7  md:mb-0 place-content-center md:col-span-full place-self-center">
              <Image
                className=""
                src="/images/Frame2.svg"
                width="300"
                height="300"
              ></Image>
            </div>
            <div className="col-span-full place-self-center flex space-x-6 justify-content-center">
              <a href="https://www.linkedin.com/in/michaelbergerson">
                <span
                  className="iconify text-white text-3xl"
                  data-icon="brandico-linkedin-rect"
                  data-inline="false"
                ></span>
              </a>
              <a href="https://github.com/anxietyattacked">
                <span
                  className="iconify text-white text-3xl"
                  data-icon="akar-icons:github-fill"
                  data-inline="false"
                ></span>
              </a>
              <a href="mailto:michaelbergerson@gmail.com">
                <span
                  className="iconify text-white text-3xl"
                  data-icon="ant-design:mail-outlined"
                  data-inline="false"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
