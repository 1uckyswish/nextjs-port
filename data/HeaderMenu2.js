import { AiOutlineHome } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";

module.exports = [
  {
    id: 1,
    name: "Home",
    routePath: "/home/home",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    name: "Resume",
    routePath: "/home/resume",
    icon: <CgNotes />,
  },
  {
    id: 3,
    name: "Works",
    routePath: "/home/works",
    icon: <FiCodesandbox />,
  },
  {
    id: 4,
    name: "Blogs",
    routePath: "/home/blogs",
    icon: <FaBlogger />,
  },
  {
    id: 5,
    name: "Contact",
    routePath: "/home/contact",
    icon: <RiContactsBookLine />,
  },
];
