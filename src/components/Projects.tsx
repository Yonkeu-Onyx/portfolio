import { useState, type SetStateAction } from "react";
import Geolocation from "./projects/Geolocation";
import InsectIdentification from "./projects/InsectIdentification";

function Projects() {
  return (
    <>
      <Geolocation />
      <InsectIdentification />
    </>
  );
}

export default Projects;
