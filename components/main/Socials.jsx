import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/FreyzS7" },
  { icon: <FaLinkedin />, path: "www.linkedin.com/in/abdul-azis-dev" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@FreyzS" },
  { icon: <FaTwitter />, path: "" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link href={social.path} key={index} className={`${iconStyles} hover:scale-110 transition-transform duration-300`}>
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
