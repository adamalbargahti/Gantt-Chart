import logo from "../assets/logo1.png";
import {  NavLink } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { GrProjects } from "react-icons/gr";


 const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <MdHomeFilled className="w-5 h-5"/>,
        label: "Home",
        path: "/",
        visible: ["admin"],
      },
      {
        icon: <GrProjects className="w-5 h-5"/>,
        label: "Projects",
        path: "/projects",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      // {
      //   icon: "/profile.png",
      //   label: "Profile",
      //   path: "/profile",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      {
        icon: <IoMdSettings className="w-5 h-5"/>,
        label: "Settings",
        path: "/settings",
        visible: ["admin"]
      },
      {
        icon: <LuLogOut className="w-5 h-5"/>,
        label: "Logout",
        path: "/logout",
        visible: ["admin"]
      },
    ],
  },
];


const Sidebar = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-4 ">
      <div className=" bg-red0 w-full flex flex-col items-center justify-center">
        <img src={logo} className="w-20 h-24 object-contain" alt="logo" title="WD E&C" />
        <h1 className="text-WD_E&C-Tinted-Slate lg:block hidden font-bold text-xl font-sans">
          WD E&C
        </h1>
      </div>
      <div>
      {menuItems.map((i) => (
        <div className="flex  flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-WD_E&C-Tinted-Slate font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <NavLink
              to={item.path}
              key={item.label}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center justify-center lg:justify-start gap-4 text-WD_E&C-Off-White py-2 bg-WD_E&C-Evergreen-Forest md:px-2 rounded-md hover:bg-WD_E&C-Tintedd-Chacoal"
                  : "flex items-center justify-center lg:justify-start gap-4 text-WD_E&C-Off-White py-2 md:px-2 rounded-md hover:bg-WD_E&C-Tintedd-Chacoal"
              }
            >
              {item.icon}
              <span className="hidden lg:block">{item.label}</span>
            </NavLink>
          ))}

        </div>
      ))}
      </div>
    
    </div>
  );
};

export default Sidebar;
