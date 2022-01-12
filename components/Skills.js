import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-[#2A343D] px-12 md:px-20 lg:px-36 py-8">
      <h1 className="text-white font-bold text-4xl mb-8">Skills</h1>
      <div className="grid grid-cols-2 gap-y-8">
        <div className="flex col-span-full">
          <span
            className="iconify text-white text-4xl mr-2"
            data-icon="carbon:text-link-analysis"
            data-inline="false"
          ></span>
          <h1 className="col-span-full text-white text-3xl">Data Analysis</h1>
        </div>

        <div className="col-span-full md:col-span-1 border-solid border-2">
          <h1 className=" text-white text-2xl mb-4 text-center">Langauges</h1>
          <p className="text-gray-100 text-center">Python, R, SQL, Git</p>
        </div>
        <div className="col-span-full md:col-span-1 border-solid border-2">
          <h1 className="text-white text-2xl mb-4 text-center">Technologies</h1>
          <p className="text-gray-100 text-center">
            Pandas, Tidyverse, Statistics, Excel, Plotly, Tableau
          </p>
        </div>
        <div className="flex col-span-full">
          <span
            className="iconify text-white text-4xl mr-2"
            data-icon="ri:computer-line"
            data-inline="false"
          ></span>
          <h1 className="col-span-full text-white text-3xl">Web Development</h1>
        </div>
        <div className="col-span-full md:col-span-1 border-solid border-2">
          <h1 className=" text-white text-2xl mb-4 text-center">Langauges</h1>
          <p className="text-gray-100 text-center">
            TypeScript, JavaScript, CSS, HTML, Python, R, SQL, Git
          </p>
        </div>
        <div className="col-span-full md:col-span-1 border-solid border-2">
          <h1 className="text-white text-2xl mb-4 text-center">Technologies</h1>
          <p className="text-gray-100 text-center">
            <strong>Frontend:</strong> React, Next.js, D3.js, Three.js Tailwind
            CSS, Urql
          </p>
          <p className="text-gray-100 text-center">
            <strong>Backend:</strong> Node, Express, Graphql, TypeOrm,
            PostgreSQL, Redis
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
