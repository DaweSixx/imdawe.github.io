import React from "react";

const Projects = (props) => {
  const data = props.data;
  return (
    <div>
      <div className="bd w-200 h-40  md:h-48 lg:h-60 xl:h-80 hover:-translate-y-4 ease-in duration-200  ">
        <a className="bd block w-full h-full" href={data.href}>
          <img
            className="h-full w-full opacity-75 hover:opacity-100 hover:ease-in duration-200"
            src={data.image}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
