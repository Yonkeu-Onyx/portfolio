import Presentation from "./Presentation";
import profile from "../assets/photos/profile_transparent.png";
import About from "./About";
import Projects from "./Projects"

function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)",
        }}
      >
        <div className="d-flex ms-3 me-2">
          <div className="w-50 position-relative">
            <div className="me-2 ps-3 pt-3 position-relative top-50 start-50 translate-middle border border-5 border-primary rounded">
              <Presentation />
            </div>
          </div>
          <div className="w-50 position-relative">
            <div className="position-relative top-50 start-100 translate-middle ">
              <img
                src={profile}
                alt="profile picture"
                style={{ width: "400px" }}
              />
            </div>
          </div>
        </div>
        <div className="container"  >
          <About />
        </div>
      </div>
    </>
  );
}

export default Home;
