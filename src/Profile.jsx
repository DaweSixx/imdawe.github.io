import React from "react";
import Me from "./images/me.jpg";
import AboutMe from "./AboutMe";

const Profile = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-center pt-8 s:pt-16 lg:pt-32 mb-14 lg:mb-32">
      <div className="mr-0 lg:mr-32 mb-8 s:mb-16 lg:mb-0 ">
        <img className=" bd rounded-full w-52 h-52 " src={Me} alt="Me" />
      </div>
      <AboutMe />
    </div>
  );
};

export default Profile;
