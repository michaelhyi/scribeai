import React from "react";
import RecordRow from "./RecordRow";

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
  records: any[];
}

const RecordTable: React.FC<Props> = ({ records }) => {
  return (
    <div className="mt-4 bg-white border-b-neutral-100 border-[1px] p-4 rounded-lg">
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Record Data Monitorization</TableCaption>
          <Thead>
            <Tr>
              <Th>Patient Name</Th>
              <Th>MRN #</Th>
              <Th>Date Created</Th>
              <Th>Date Updated</Th>
            </Tr>
          </Thead>
          <Tbody>
            {records.map((x) => (
              <RecordRow
                key={x.id}
                id={x.id}
                patientName={x.patientName}
                mrn={x.patientMrn}
                createdAt={x.createdAt}
                updatedAt={x.updatedAt}
              />
            ))}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </div>
  );
};

export default RecordTable;
