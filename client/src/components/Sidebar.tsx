import Link from "next/link";
import {
  AiFillFolderOpen,
  AiFillMessage,
  AiFillSchedule,
} from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdContactSupport } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 flex flex-col bg-white shadow-lg">
      <div className="flex font-semibold text-2xl h-24 items-center justify-center w-full text-blue-400 border-b-[1.5px] border-b-neutral-100">
        <Image src="/logo3v2.png" width={40} height={40} alt="logopic" />
        <div className="ml-4 font-bold text-3xl text-blue-400">ScribeAI</div>
      </div>
      <div className="px-6 py-8">
        <div className="text-neutral-700 font-medium text-xs">MENU</div>
        <Link
          href="/"
          className="flex gap-2 items-center text-neutral-700 mt-4 text-sm font-light cursor-pointer duration-500 hover:opacity-50 bg-[#cde9b1] border-[1px] p-2 rounded-lg"
        >
          <BiSolidDashboard color="#3a3b3c" size={20} />
          <div>Dashboard</div>
        </Link>
        <Link
          href="/records"
          className="flex gap-2 items-center text-neutral-700 mt-4 text-sm font-light  cursor-pointer duration-500 hover:opacity-50 bg-[#85bbdc] border-[1px] p-2 rounded-lg"
        >
          <AiFillFolderOpen color="#3a3b3c" size={20} />
          <div>Records</div>
        </Link>
        <Link
          href="/records"
          className="flex gap-2 items-center text-neutral-700 mt-4 text-sm font-light  cursor-pointer duration-500 hover:opacity-50  bg-[#f0bec3] border-[1px] p-2 rounded-lg"
        >
          <GrAnalytics color="#3a3b3c" size={20} />
          <div>Analytics</div>
        </Link>
        <Link
          href="/records"
          className="flex gap-2 items-center text-neutral-700 mt-4 text-sm font-light  cursor-pointer duration-500 hover:opacity-50  bg-[#CBC3E3] border-[1px] p-2 rounded-lg"
        >
          <AiFillSchedule color="#3a3b3c" size={20} />
          <div>Appointments</div>
        </Link>
      </div>
      <div className="border-b-neutral-100 border-b-[1.5px] mx-8 mt-4" />
      <div className="px-6 py-8">
        <div className="text-neutral-700 font-medium text-xs">GENERAL</div>
        <div className="flex gap-2 items-center text-neutral-700 mt-4 text-sm font-light cursor-pointer duration-500 hover:opacity-50 bg-[#efecec] border-[1px] p-2 rounded-lg">
          <FiSettings color="#3a3b3c" size={20} />
          <div>Settings</div>
        </div>
        <div className="flex gap-2 items-center text-neutral-700 mt-4 text-sm font-light cursor-pointer duration-500 hover:opacity-50 bg-[#efecec] border-[1px] p-2 rounded-lg">
          <MdContactSupport color="#3a3b3c" size={20} />
          <div>Support</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
