import Link from "next/link";
import { AiFillFolderOpen } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdContactSupport } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-60 flex flex-col bg-white shadow-lg">
      <div className="flex font-semibold text-2xl h-24 items-center justify-center w-full text-blue-400 border-b-[1.5px] border-b-neutral-100">
        Medicare
      </div>
      <div className="px-6 py-8">
        <div className="text-neutral-300 font-medium text-xs">MENU</div>
        <Link
          href="/"
          className="flex gap-2 items-center text-neutral-400 mt-4 text-sm font-light cursor-pointer duration-500 hover:opacity-50"
        >
          <BiSolidDashboard color="#a3a3a3" size={20} />
          <div>Dashboard</div>
        </Link>
        <Link
          href="/patients"
          className="flex gap-2 items-center text-neutral-400 mt-4 text-sm font-light cursor-pointer duration-500 hover:opacity-50"
        >
          <BsFillPeopleFill color="#a3a3a3" size={20} />
          <div>Patients</div>
        </Link>
        <Link
          href="/records"
          className="flex gap-2 items-center text-neutral-400 mt-4 text-sm font-light  cursor-pointer duration-500 hover:opacity-50"
        >
          <AiFillFolderOpen color="#a3a3a3" size={20} />
          <div>Records</div>
        </Link>
      </div>
      <div className="border-b-neutral-100 border-b-[1.5px] mx-8 mt-4" />
      <div className="px-6 py-8">
        <div className="text-neutral-300 font-medium text-xs">GENERAL</div>
        <div className="flex gap-2 items-center text-neutral-400 mt-4 text-sm font-light cursor-pointer duration-500 hover:opacity-50">
          <FiSettings color="#a3a3a3" size={20} />
          <div>Settings</div>
        </div>
        <div className="flex gap-2 items-center text-neutral-400 mt-4 text-sm font-light cursor-pointer duration-500 hover:opacity-50">
          <MdContactSupport color="#a3a3a3" size={20} />
          <div>Support</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
