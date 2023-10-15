import React from "react";
import { patients } from "@/data/patients";
import { BsThreeDots } from "react-icons/bs";
import Image from "next/image";

const TotalPatients = () => {
  return (
    <div className="pt-4">
      <div className="mt-4 w-96 bg-white border-b-neutral-100 border-[1px] py-2 px-4 rounded-lg float-right shadow-md">
        <h1 className="pt-2 flex justify-between">
          Total Patients
          <BsThreeDots color="#a3a3a3" size={20} />
        </h1>
        <div className="ml-36">
          <Image src="/blueGraph.png" width={135} height={100} alt="" />
        </div>

        <h2 className="text-4xl">
          4 <span className="text-sm text-green-600">+4</span>
        </h2>
      </div>
    </div>
  );
};

export default TotalPatients;
