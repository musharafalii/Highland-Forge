import { Mail, Home } from "react-feather"
import { FiBox, FiUsers, FiNavigation} from "react-icons/fi"

export default [
  {
    id: "home",
    title: "Home",
    icon: <Home size={20} />,
    navLink: "/home"
  },
  {
    id: "secondPage",
    title: "Second Page",
    icon: <Mail size={20} />,
    navLink: "/second-page"
  },
  {
    id: "services",
    title: "Services",
    icon: <FiBox size={20} />,
    navLink: "/service"
  },
  {
    id: "contact us",
    title: "Contact Us",
    icon: <FiNavigation size={20} />,
    navLink: "/contact"
  },
  {
    id: "about us ",
    title: "About Us",
    icon: <FiUsers size={20} />,
    navLink: "/about"
  }
]
