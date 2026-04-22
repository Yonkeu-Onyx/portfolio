import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/geolocation.jpg";
import card2 from "../../assets/images/portfolio-images/insectIdentification.jpg";


import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Geolocation from "./Geolocation";
import InsectApi from "./InsectIdentification";
const projectData = [
  {
    id: 1,
    image: card1,
    category: "API",
    title: "Geolocation",
    display: "Geolocation",
    description:
      "An api that identifies the region in which you are located based on your coordinates",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "API",
    title: "InsectApi",
    display: "InsectApi",
    description:
      "An api meant to help identify insects and pests and help control them",
    link: "#!",
  },
  // {
  //   id: 3,
  //   image: card3,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Developed a modern admin panel with a focus on usability and seamless navigation for end users and so on.",
  //   link: "#!",
  // },
  // {
  //   id: 4,
  //   image: card4,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Created a responsive dashboard layout that adapts smoothly across devices and screen sizes and so on.",
  //   link: "#!",
  // },
  // {
  //   id: 5,
  //   image: card5,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Implemented interactive charts and widgets to visualize product data effectively for stakeholders.",
  //   link: "#!",
  // },
  // {
  //   id: 6,
  //   image: card6,
  //   category: "UI-UX DESIGN",
  //   title: "Product Admin Dashboard",
  //   description:
  //     "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
  //   link: "#!",
  // },
];

const Portfolio = () => {

  const [project, setProject] = useState(null);
  const componentMap = {
    Geolocation: Geolocation,
    InsectApi: InsectApi,
  };

  const ProjectComponent = project;
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating web andd mobile applications and apis.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            // <Projects  />
            <div data={data} key={index} className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
              <img src={data?.image} alt={`${data?.title} image`} style={{ height: "250px", width: "auto" }} />
              <div className="p-4 xs:p-8">
                <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
                <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
                  {data?.title}
                </p>
                <p
                  style={{ lineHeight: "20px", letterSpacing: "0%" }}
                  className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
                >
                  {data?.description}
                </p>
                <button onClick={() => setProject(() => componentMap[data.title])}
                  className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
                >
                  Try
                  <span className="ms-1 xs:ms-3">
                    <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
                  </span>
                </button>
                {/* </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        {ProjectComponent && <ProjectComponent />}
        {/* <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a> */}
      </div>
    </div>
  );
};

export default Portfolio;
