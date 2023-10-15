import React from "react";
import { records} from "@/data/records";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";

const RecordLength: number = records.length;

const TotalPatients = () => {
  return (
    <div className="pt-4 px-4">
      <div className="mt-4 w-96 bg-white border-b-neutral-100 border-[1px] py-4 px-4 rounded-lg float-right shadow-md">
        <h1 className="flex justify-between">
          Total Records
          <BsThreeDots color="#a3a3a3" size={20} />
        </h1>
        <div className="ml-36">
          <Image src="/redGraph.png" width={150} height={150} alt="" />
        </div>

        <h2 className="text-4xl">{RecordLength} </h2>
      </div>
    </div>
  );
};

export default TotalPatients;
