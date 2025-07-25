import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import {  FaPython  } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { SiMysql} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { 	SiCplusplus } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
 { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "MySQL", icon: SiMysql },
  { skill: "ReactJS", icon: FaReact },
  { skill: "PHP", icon: FaPhp },
  { skill: "C++", icon: 	SiCplusplus },
  { skill: "Python", icon:  FaPython  },
  { skill: "DSA", icon: FaBrain }

];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
