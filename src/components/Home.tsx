import Presentation from "./Presentation";
import profile from "../assets/photos/profile.png";

function Home() {
  return (
    <>
      <div className="container d-flex ms-3 me-5">
        <div className="w-50">
          <Presentation />
        </div>
        <div className="w-50">
          <img src={profile} alt="profile picture" style={{ width: "400px" }} />
        </div>
      </div>
    </>
  );
}

export default Home;
