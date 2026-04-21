import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Frontend development",
    elements: [
      {
        id: "i",
        name: "Html, Css, & Js + Bootstrap/Tailwind Css"
      },
      {
        id: "ii",
        name: "React + TypeScript/Js"
      }
    ]
  },
  {
    id: 2,
    title: "Backend",
    elements: [
      {
        id: "i",
        name: "Node.js + Express"
      },
      {
        id: "ii",
        name: "Python + FastApi/Flask/Jango Rest"
      },
      {
        id: "iii",
        name: "PHP + Laravel"
      },
      {
        id: "iv",
        name: "C# + ASP MVC"
      }
    ]
  },
  {
    id: 3,
    title: "Mobile",
    elements: [
      {
        id: "i",
        name: "Java"
      },
      {
        id: "ii",
        name: "Kotlin"
      },
      {
        id: "iii",
        name: "Flutterflow"
      }
    ]
  },
  {
    id: 4,
    title: "Databases and Tools",
    elements: [
      {
        id: "i",
        name: "Mysql"
      },
      {
        id: "ii",
        name: "SQLite"
      },
      {
        id: "iii",
        name: "MongoDb"
      },
      {
        id: "iv",
        name: "Firebase"
      },
      {
        id: "v",
        name: "Git & GitHub"
      },
      {
        id: "vi",
        name: "Docker"
      }
    ]
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="skills"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Programming Languages, Libraries and Tools I use</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I've worked with a diverse range of technologies including frontend frameworks, backend APIs, and databases, adapting my stack based on project requirements to deliver efficient and scalable solutions.          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            This portfolio has been built with React and TypeScript + Html and Tailwind Css
          </p>
        </div>
        {/* <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a> */}
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
