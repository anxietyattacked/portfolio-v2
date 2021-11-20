import Image from "next/image";
import React from "react";
import { projectData } from "../data/projectInfo";
import { dataProject } from "../data/dataProject";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-200 grid gap-3 px-8 md:px-20 lg:px-36 py-8"
    >
      <h1 className="font-bold text-4xl mb-5">Projects</h1>
      <h2 className="font-bold text-3xl mb-5">Data Analytics</h2>
      {dataProject.map((project) => (
        <div
          key={project.name}
          className="grid md:grid-cols-5 justify-center mb-8"
        >
          <h2 className="font-bold text-2xl mb-2 md:col-span-5">
            {project.name}
          </h2>
          <div className="col-span-1 md:col-span-5 lg:col-span-2 mb-4 lg:mb-0">
            <Image
              className="absolute top-0 left-0"
              src={project.image}
              width={project.iWidth}
              height={project.iHeight}
              alt={`${project.name} screenshot`}
            />
          </div>
          <div className="md:col-span-5 lg:col-span-3 grid md:grid-cols-4 place-content-center">
            <p className="md:col-span-4 mx-8 md:text-lg">{project.info}</p>
            <div className="md:col-span-4 flex justify-center mt-8">
              <div className="">
                <a
                  aria-label="go to website"
                  className="px-3 py-2 bg-[#F02B2B] text-center font-bold text-white text-lg mr-4"
                  href={project.Link}
                >
                  Website
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h2 className="font-bold text-3xl mb-5">Web Development</h2>
      {projectData.map((project) => (
        <div
          key={project.name}
          className="grid md:grid-cols-5 justify-center mb-8"
        >
          <h2 className="font-bold text-2xl mb-2 md:col-span-5">
            {project.name}
          </h2>
          <div className="col-span-1 md:col-span-5 lg:col-span-2 mb-4 lg:mb-0">
            <Image
              className="absolute top-0 left-0"
              src={project.image}
              width={project.iWidth}
              height={project.iHeight}
              alt={`${project.name} screenshot`}
            />
          </div>
          <div className="md:col-span-5 lg:col-span-3 grid md:grid-cols-4 place-content-center">
            <p className="md:col-span-4 mx-8 md:text-lg">{project.info}</p>
            <div className="md:col-span-4 flex justify-center mt-8">
              <div className="">
                <a
                  aria-label="go to website"
                  className="px-3 py-2 bg-[#F02B2B] text-center font-bold text-white text-lg mr-4"
                  href={project.Link}
                >
                  Website
                </a>
              </div>
              <div className="col-span-2">
                <a
                  aria-label="go to github"
                  className="px-3 py-2 bg-[#21B5F4]   text-center text-white font-bold text-lg"
                  href={project.ghLink}
                >
                  Github
                </a>
              </div>
            </div>
            <div className="md:col-span-4 mt-8">
              <p className="text-center">
                <strong>Frontend: </strong>
                {project.tech}
              </p>
              {project.techB ? (
                <p className="text-center">
                  <strong>Backend: </strong>
                  {project.techB}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
