import React from "react";
import Profile from "./Profile";
import Projects from "./Projects";
import web1 from "./images/web1.png";
import web2 from "./images/web2.png";

const App = () => {
  const project = [
    {
      id: 1,
      image: web1,
      href: "https://dawesixx.github.io/Coffee.github.io/",
    },
    {
      id: 2,
      image: web2,
      href: "https://dawesixx.github.io/YandexGo.github.io/",
    },
  ];
  return (
    <div className="w-screen h-screen bg-no-repeat bg-cover bg-me text-gray-700 ">
      <Profile />

      <p className="text-center text-4xl -mt-5 s:mt-0">Мои Проекты :</p>
      <div className=" m-auto w-max  grid grid-cols-1 gap-5  md:grid-cols-2 md:mt-20  mt-10">
        {project.map((item) => {
          return <Projects key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
