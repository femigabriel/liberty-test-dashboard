import React from "react";
import { MenuBarist } from "../services/Services";
import ArrowIcon from "../svgs/ArrowIcon";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const menuA: MenuBarist[] = [
  {
    id: 1,
    title: " Home",
    icon: (
      <img
        src="./assets/icons/home.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    icon: (
      <img
        src="./assets/icons/category-2.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/dashboard",
  },
];

const menuB: MenuBarist[] = [
  {
    id: 1,
    title: "Workspace",
    icon: (
      <img
        src="./assets/icons/strongbox.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/workspace",
  },
  {
    id: 2,
    title: "Clients",
    icon: (
      <img
        src="./assets/icons/shop.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/clients",
  },
  {
    id: 3,
    title: "Schedule Appointment",
    icon: (
      <img
        src="./assets/icons/3dcube.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/schedule",
  },
  {
    id: 4,
    title: "payment",
    icon: (
      <img
        src="./assets/icons/card-edit.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/payment",
  },
  {
    id: 5,
    title: "Task",
    icon: (
      <img
        src="./assets/icons/cards.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/task",
  },
  {
    id: 6,
    title: "Message",
    icon: (
      <img
        src="./assets/icons/radar.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/message",
  },
  {
    id: 7,
    title: "Reports",
    icon: (
      <img
        src="./assets/icons/medal-star.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/reports",
  },
];
const menuC: MenuBarist[] = [
  {
    id: 1,
    title: "Leaderboard",
    icon: (
      <img
        src="./assets/icons/medal-star.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/leaderboard",
  },
  {
    id: 2,
    title: "Profile & Settings",
    icon: (
      <img
        src="./assets/icons/security-user.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/profile",
  },
  {
    id: 3,
    title: "Bank performance",
    icon: (
      <img
        src="./assets/icons/radar.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/performance",
  },
];
export const Sidebar = ({ to, children, ...props }) => {
  return (
    <div className="sidebar shadow-md px-5">
      <div className="pt-10 menu-list ">
        <div>
          <div className="mb-10 sidebar-title">
            <h3 className="font-extrabold">Paybox</h3>
            <p>by LiberyPay</p>
          </div>
          <nav className="mb-7">
            {menuA?.map((list: any, index) => {
              return (
                <CustomLink to={list.link} key={index}>
                  <div className="flex py-2">
                    <span className="px-3">{list.icon}</span>
                    <span className="tracking-[-0.011em] ">{list.title}</span>
                  </div>
                </CustomLink>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="menu-list mt-5 ">
        <nav className="mb-5">
          {menuB?.map((list: any, index) => {
            return (
              <CustomLink to={list.link} key={index}>
                <div className="flex justify-between py-2">
                  <div className="flex ">
                    <span className="px-3 icon">{list.icon}</span>
                    <span className="tracking-[-0.011em]">{list.title}</span>
                  </div>
                  <ArrowIcon />
                </div>
              </CustomLink>
            );
          })}
        </nav>
      </div>
      {/* <div className="menu-list mt-5 ">
        <nav className="mb-5">
          {menuC?.map((list: any, index) => {
            return (
              <CustomLink to={list.link} key={index}>
                <div className="flex justify-between py-2">
                  <div className="flex">
                    <span className="px-3 icon">{list.icon}</span>
                    <span className="tracking-[-0.011em]">{list.title}</span>
                  </div>
                  <ArrowIcon />
                </div>
              </CustomLink>
            );
          })}
        </nav>
      </div> */}
    </div>
  );
};

export function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props} className="">
        {children}
      </Link>
    </li>
  );
}
