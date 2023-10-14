import React from "react";
import { patients} from "@/data/patients";
import { BsThreeDots } from 'react-icons/bs';

const PatientLength: number = patients.length;

const TotalPatients = () => {
  return (
    <div className="pt-4 px-4">
      <div className="mt-4 w-96 bg-white border-b-neutral-100 border-[1px] p-4 rounded-lg float-right" >
        <h1 className="flex justify-between">
            Total Patients 
            <BsThreeDots color="#a3a3a3" size={20}/>

        </h1>
        
        <h2 className="text-4xl">{ PatientLength } </h2>

        
      </div>
    </div>
  );
};

export default TotalPatients;
