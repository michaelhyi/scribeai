import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";

const RecordsHeader = () => {
  return (
    <div className="mt-4 bg-white border-b-neutral-100 border-[1px] p-4 rounded-lg">
      <div className="font-medium px-5 flex items-center justify-between">
        <h5> Past Records (12) </h5>
        <div className="flex gap-8">
          <AiOutlinePlusSquare color="#a3a3a3" size={30} />
          <AiOutlineSearch color="#a3a3a3" size={30} />
          <AiOutlineQuestionCircle color="#a3a3a3" size={30} />
        </div>
      </div>
    </div>
  );
};

export default RecordsHeader;
