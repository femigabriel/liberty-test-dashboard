import React from "react";
import { MenuBarist } from "../services/Services";
import ArrowIcon from "../svgs/ArrowIcon";

const menuA: MenuBarist[] = [
  {
    id: 1,
    title: " Home",
    icon: (
      <img
        src="../src/assets/icons/home.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/home",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    icon: (
      <img
        src="../src/assets/icons/category-2.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/",
  },
];

const menuB: MenuBarist[] = [
  {
    id: 1,
    title: "Personal",
    icon: (
      <img
        src="../src/assets/icons/strongbox.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/personal",
  },
  {
    id: 2,
    title: "Sales Hub",
    icon: (
      <img
        src="../src/assets/icons/shop.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/sales",
  },
  {
    id: 3,
    title: "Talent Management",
    icon: (
      <img
        src="../src/assets/icons/3dcube.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/talent",
  },
  {
    id: 4,
    title: "Spend Management",
    icon: (
      <img
        src="../src/assets/icons/card-edit.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/spend",
  },
  {
    id: 5,
    title: "Cards",
    icon: (
      <img
        src="../src/assets/icons/cards.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/card",
  },
];
const menuC: MenuBarist[] = [
  {
    id: 1,
    title: "Leaderboard",
    icon: (
      <img
        src="../src/assets/icons/medal-star.svg"
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
        src="../src/assets/icons/security-user.svg"
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
        src="../src/assets/icons/radar.svg"
        className="cursor-pointer"
        alt="bell"
      />
    ),
    link: "/performance",
  },
];
export const Sidebar = () => {
  return (
    <div className="sidebar shadow-md px-5">
      <div className="pt-10 menu-list ">
        <div>
          <div className="mb-10 sidebar-title">
            <h3 className=" text-[32px] font-bold  ">Paybox</h3>
            <p>by LiberyPay</p>
          </div>
          <nav className="mb-5">
            {menuA?.map((list: any, index) => {
              return (
                <li
                  key={index}
                  // href={list.link}
                  className="  text-[14px] py-3 font-medium cursor-pointer flex mb-3"
                >
                  <span className="px-3">{list.icon}</span>
                  <span className="tracking-[-0.011em]">{list.title}</span>
                </li>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="menu-list mt-5 ">
        <nav className="">
          {menuB?.map((list: any, index) => {
            return (
              <li
                key={index}
                className="  text-[14px] py-3 font-medium cursor-pointer flex justify-between mb-3"
              >
                <div className="flex">
                  <span className="px-3 icon">{list.icon}</span>
                  <span className="tracking-[-0.011em]">{list.title}</span>
                </div>
                <ArrowIcon />
              </li>
            );
          })}
        </nav>
      </div>
      <div className="menu-list mt-5 ">
        <nav className="">
          {menuC?.map((list: any, index) => {
            return (
              <li
                key={index}
                className="  text-[14px] py-3 font-medium cursor-pointer flex justify-between mb-3"
              >
                <div className="flex">
                  <span className="px-3 icon">{list.icon}</span>
                  <span className="tracking-[-0.011em]">{list.title}</span>
                </div>
                <ArrowIcon />
              </li>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
