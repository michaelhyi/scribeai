import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineQuestion } from "react-icons/ai";

const PatientHeader = () => {
  return (
    <div className="mt-4 bg-white border-b-neutral-100 border-[1px] p-4 rounded-lg  shadow-md">
      <div className="font-medium px-5 flex items-center justify-between">
        <h5>Total Patients (487) </h5>
        <div className="flex gap-8">
          <div className="border-[1px] p-2 border-gray-400">
            <AiOutlinePlus color="#5A5A5A" size={30} />
          </div>
          <div className="border-[1px] p-2 border-gray-400">
            <AiOutlineSearch color="#5A5A5A" size={30} />
          </div>
          <div className="border-[1px] p-2 border-gray-400">
            <AiOutlineQuestion color="#5A5A5A" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHeader;
