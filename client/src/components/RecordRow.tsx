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
    MRN: string;
    DateOfScan: string;
    Record: string;
  }
  
  const RecordRow: React.FC<Props> = ({ Name, MRN, DateOfScan, Record }) => {
    return (
      <Tr>
        <Th>{Name}</Th>
        <Th>
          {MRN}
        </Th>
        <Th>{format(new Date(DateOfScan), "P")}</Th>
        <Th>{Record}</Th>
      </Tr>
    );
  };
  
  export default RecordRow;
  