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
                <Th>Diagnosis</Th>
                <Th>Status</Th>
                <Th>Last Appointment</Th>
                <Th>Next Appointment</Th>
              </Tr>
            </Thead>
            <Tbody>
              {patients.map((x) => (
                <PatientRow
                  name={x.Name}
                  diagnosis={x.Diagnosis}
                  status={x.Status}
                  lastAppointment={x.LastAppointment}
                  nextAppointment={x.NextAppointment}
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
