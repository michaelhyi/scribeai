import { useRouter } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineQuestion } from "react-icons/ai";

interface Props {
  totalPatients: number;
}

const PatientHeader: React.FC<Props> = ({ totalPatients }) => {
  const router = useRouter();

  return (
    <div className="mt-4 bg-white border-b-neutral-100 border-[1px] p-4 rounded-lg  shadow-md">
      <div className="font-medium px-5 flex items-center justify-between">
        <h5>
          <strong>Total Patients</strong> ({totalPatients})
        </h5>
        <div className="flex gap-8">
          <div
            onClick={() => router.push("/patients/create")}
            className="border-[1px] p-2 border-gray-400 cursor-pointer duration-500 hover:opacity-50"
          >
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
