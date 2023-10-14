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
  name: string;
  diagnosis: string;
  status: string;
  lastAppointment: string;
  nextAppointment: string;
}

const PatientRow: React.FC<Props> = ({
  name,
  diagnosis,
  status,
  lastAppointment,
  nextAppointment,
}) => {
  return (
    <Tr>
      <Th>{name}</Th>
      <Th>{diagnosis}</Th>
      <Th>{status}</Th>
      <Th>{lastAppointment}</Th>
      <Th>{nextAppointment}</Th>
    </Tr>
  );
};

export default PatientRow;
