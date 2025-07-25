import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
I'm Pratik Bulkunde, a passionate software developer and tech enthusiast with a strong foundation in Python, SQL, and full-stack development. I specialize in backend systems, database design, and problem-solving, and I love building practical, impactful applications that solve real-world problems. As a B.Tech student in Information Technology, I've worked on diverse projects using technologies like React, Flask, and MySQL, and have gained recognition through national-level competitions like Smart India Hackathon. I'm constantly learning, improving, and sharing my knowledge to grow as a developer and contribute meaningfully to the tech community.


      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
