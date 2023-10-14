import React from "react";
import Patients from "@/pages/patients";
import { AiOutlinePlusSquare } from "react-icons/ai";
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

const PatientTable = () => {
  return (
    <div className="pt-4 px-4">
      <div className="mt-4 bg-white border-b-neutral-100 border-[1px] p-4 rounded-lg">
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Patient Data Monitorization</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Med ID</Th>
                <Th>Diagnosis</Th>
                <Th>Status</Th>
                <Th>Last Appointment</Th>
                <Th>Next Appointment</Th>
                <Th>Options</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Calvin Huang</Td>
                <Td>20050110</Td>
                <Td>Allergies</Td>
                <Td>On Treatment</Td>
                <Td>5/10/2023</Td>
                <Td>12/14/2023</Td>
                <Td>
                  <div className="flex gap-8">
                    <AiOutlinePlusSquare color="#a3a3a3" size={20} />
                  </div>
                </Td>
              </Tr>
              <Tr>
                <Td>Michael Yi</Td>
                <Td>20041214</Td>
                <Td>Gonorrhea</Td>
                <Td>Awaiting Surgery</Td>
                <Td>6/21/2023</Td>
                <Td>11/24/2023</Td>
                <Td><AiOutlinePlusSquare color="#a3a3a3" size={20} /></Td>
              </Tr>
              <Tr>
                <Td>Jonathan Jia</Td>
                <Td>20050419</Td>
                <Td>Malaria</Td>
                <Td>Recovered</Td>
                <Td>4/15/2023</Td>
                <Td>12/21/2023</Td>
                <Td><AiOutlinePlusSquare color="#a3a3a3" size={20}/></Td>
              </Tr>
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default PatientTable;
