import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Static Website for Police Defence Academy ",
    year: "Feb 2023",
    align: "right",
    image: "../../public/images/p1.jpg",
    link: "#",
  },
  {
    name: "Waqt Pe Post App",
    year: "Dec 2024",
    align: "left",
    image: "../../public/images/w1.jpg",
    link: "#",
  },
  {
    name: "Hotel Management System",
    year: "March 2025",
    align: "right",
    image: "../../public/images/h1.png",
    link: "#",
  }
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
