import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/pratik-bulkunde-226974256/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/PBB999" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/pratik_bulkunde_?igsh=ZW0yYmwxaWp0cTRp" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
