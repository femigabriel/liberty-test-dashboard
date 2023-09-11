import React from "react";
import { ResponseFetchUsers, ResponseFetctTasks } from "./Services";
const profile = "/assets/images/profile.jpg";
const depositphotos = "/assets/images/beautiful.jpg";
const Group = "/assets/images/Group.png";

export const clientList: ResponseFetchUsers[] = [
  {
    id: 1,
    name: "Adekola Damilare",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
    title: "",
    description: "",
    profile: (
      <img src={profile} className="w-[85px] h-[85px] rounded-full" alt="" />
    ),
  },
  {
    id: 2,
    name: "Odusote Mayokun",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
    title: "",
    description: "",
    profile: (
      <img
        src={depositphotos}
        className="w-[85px] h-[85px] rounded-full"
        alt=""
      />
    ),
  },
  {
    id: 3,
    name: "Mayokun Damilare",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
    title: "",
    description: "",
    profile: (
      <img src={Group} className="w-[85px] h-[85px] rounded-full" alt="" />
    ),
  },
  {
    id: 4,
    name: "Adekola Damilare",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
    title: "",
    description: "",
    profile: (
      <img src={profile} className="w-[85px] h-[85px] rounded-full" alt="" />
    ),
  },
  {
    id: 5,
    name: "Mayokun Kemi",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
    title: "",
    description: "",
    profile: (
      <img
        src={depositphotos}
        className="w-[85px] h-[85px] rounded-full"
        alt=""
      />
    ),
  },
];

export const ClientList: ResponseFetchUsers[] = [
  {
    id: 1,
    name: "Adekola Damilare",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
    title: "",
    description: "",
    profile: (
      <img src={profile} className="w-[85px] h-[85px] rounded-full" alt="" />
    ),
  },
  {
    id: 2,
    name: "Odusote Mayokun",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
    title: "",
    description: "",
    profile: (
      <img
        src={depositphotos}
        className="w-[85px] h-[85px] rounded-full"
        alt=""
      />
    ),
  },
  {
    id: 3,
    name: "Mayokun Damilare",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
    title: "",
    description: "",
    profile: (
      <img src={Group} className="w-[85px] h-[85px] rounded-full" alt="" />
    ),
  },
  {
    id: 4,
    name: "Adekola Damilare",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
    title: "",
    description: "",
    profile: (
      <img src={profile} className="w-[85px] h-[85px] rounded-full" alt="" />
    ),
  },
  {
    id: 5,
    name: "Mayokun Kemi",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
    title: "",
    description: "",
    profile: (
      <img
        src={depositphotos}
        className="w-[85px] h-[85px] rounded-full"
        alt=""
      />
    ),
  },
];

export const TaskList: ResponseFetctTasks[] = [
  {
    id: 1,
    page: "Account",
    description: "Sales Ledger",
    status: "active",
    start: " 2023-09-19",
    end: " 2023-09-19",
  },
  {
    id: 2,
    page: "Administration",
    description: "HR training",
    status: "pending",
    start: " 2023-09-19",
    end: " 2023-09-19",
  },
  {
    id: 3,
    page: "Procurement",
    description: "Lists of items",
    status: "complete",
    start: " 2023-09-19",
    end: " 2023-09-19",
  },
];
