import React from "react";

const AboutMe = () => {
  return (
    <div className=" text-base font-semibold sm:text-xl px-10 sm:p-0">
      <span>Здравствуйте</span>
      <p>Приятно познакомится</p>
      <p>
        Меня зовут <span className="text-purple-500">{`{ Давит }`}</span>
      </p>
      <p>О себе : Mне 26 лет</p>
      <p>Я самоучка и занимаюсь программированием уже 1.5 года</p>
      <p>
        Mои скилы :
        <span className="text-purple-500">
          {" "}
          Html, CSS, Scss, Tailwindcss, JavaScript, Gulp, Git
        </span>
      </p>
      <p>
        В процессе обучения :
        <span className="text-purple-500"> ReactJs, TypeScript</span>
      </p>
      <p>
        Контактный номер :{" "}
        <a className="text-purple-500" href="tel:+79998887766">
          {" "}
          +7 (918) 653-54-82
        </a>
      </p>
    </div>
  );
};

export default AboutMe;
