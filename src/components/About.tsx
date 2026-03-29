import profile from "../assets/photos/profile.png";

function About() {
  return (
    <>
      <div className="container d-flex">
        <div className="card w-50" >
          <img className="card-img-top" src={profile} alt="profile picture" style={{ width: "300px", height: "500px" }} />
        </div>
        <div className="w-50">
          <h1>I am a fullStack developper</h1>
          <p>
            I’m a passionate Full-Stack Developer with a Diploma of Collegial
            Studies in Web, Mobile, and AI Development.
            <br />I specialize in building modern, scalable, and user-focused
            applications from front-end interfaces to back-end systems.
            <br />
            Through my training and projects, I’ve developed a solid foundation
            in designing responsive web applications, creating efficient APIs,
            and working with databases. I enjoy transforming ideas into
            functional digital solutions that are both performant and visually
            engaging.
            <br />
            I’m constantly learning and exploring new technologies to improve my
            skills and stay up to date with industry trends. Whether it’s
            developing web platforms, mobile applications, or experimenting with
            AI concepts, I’m driven by the challenge of creating impactful and
            reliable software.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
