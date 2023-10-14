import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { format } from "date-fns";

interface Props {
  Name: string;
  DOB: string;
  MRN: string;
  Sex: string;
}

const PatientRow: React.FC<Props> = ({ Name, DOB, MRN, Sex }) => {
  return (
    <Tr>
      <Th>{Name}</Th>
      <Th>
        <div
          className={`${
            Sex === "Male"
              ? "bg-[#ADD8E6] text-cyan-900"
              : "bg-[#FFB6C1] text-red-800"
          } border-[1px] p-2 rounded-full flex items-center justify-center`}
        >
          {Sex}
        </div>
      </Th>
      <Th>{format(new Date(DOB), "P")}</Th>
      <Th>{MRN}</Th>
    </Tr>
  );
};

export default PatientRow;
