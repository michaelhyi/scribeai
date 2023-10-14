import React from "react";
import Patients from "@/pages/patients";
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
                <Th>Age</Th>
                <Th>Residence</Th>
                <Th>Record</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Calvin Huang</Td>
                <Td>18</Td>
                <Td>Irvine, California</Td>
                <Td>He is an avid enjoyer of releasing flatulants</Td>
              </Tr>
              <Tr>
                <Td>Michael Yi</Td>
                <Td>18</Td>
                <Td>Irvine, California</Td>
                <Td>He is an avid enjoyer of releasing flatulants</Td>
              </Tr>
              <Tr>
                <Td>Jonathan Jia</Td>
                <Td>19</Td>
                <Td>Long Island, New York</Td>
                <Td>He is an avid enjoyer of releasing flatulants</Td>
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
