import { Mail, Home } from "react-feather"
import { FiBox, FiUsers, FiNavigation } from "react-icons/fi"

export default [
  {
    id: "home",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: "/home"
  },
  {
    id: "secondPage",
    title: "Escalated orders",
    icon: <Mail size={20} />,
    navLink: "/orders"
  },
  {
    id: "services",
    title: "Add Stock",
    icon: <FiBox size={20} />,
    navLink: "/service"
  },
  {
    id: "contact us",
    title: "Manage Roles",
    icon: <FiNavigation size={20} />,
    navLink: "/manage-roles"
  },
  {
    id: "manage users",
    title: "Manage Users",
    icon: <FiUsers size={20} />,
    navLink: "/manage-users"
  }
]
