import { FaHtml5, FaCss3Alt, FaReact ,  FaPython, FaNodeJs ,FaPhp,FaBrain} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { 	SiCplusplus } from "react-icons/si";
import { SiMysql} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
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
  { skill: "Python", icon: FaPython },
  { skill: "DSA", icon: FaBrain }
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn("up", 0.1 * (index + 1))}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col items-center"
        >
          <item.icon className="text-7xl text-orange-500" />
          <p className="text-center mt-4 text-lg font-medium">{item.skill}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AllSkillsSM;
