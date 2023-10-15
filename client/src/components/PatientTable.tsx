import React from "react";
import { patients } from "@/data/patients";
import PatientRow from "./PatientRow";
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

interface Props {
  patients: any[];
}

const PatientTable: React.FC<Props> = ({ patients }) => {
  return (
    <div className="pt-4 px-4">
      <div className="mt-4 bg-white border-b-neutral-100 border-[1px] p-4 rounded-lg">
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Patient Data Monitorization</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Sex</Th>
                <Th>Date of Birth</Th>
                <Th>MRN #</Th>
              </Tr>
            </Thead>
            <Tbody>
              {patients.map((x) => (
                <PatientRow
                  key={x}
                  id={x.id}
                  Name={x.name}
                  DOB={x.dob}
                  MRN={x.mrn}
                  Sex={x.sex}
                />
              ))}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default PatientTable;
