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
    createdAt: string,
    updatedAt: string
  }
  
  const RecordRow: React.FC<Props> = ({ createdAt, updatedAt }) => {
    return (
      <Tr>
        <Th>{format(new Date(createdAt), "P")}</Th>
        <Th>{format(new Date(updatedAt), "P")}</Th>
      </Tr>
    );
  };
  
  export default RecordRow;
  