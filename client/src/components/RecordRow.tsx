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
import { useRouter } from "next/navigation";

interface Props {
  id: number;
  patientName: string;
  mrn: string;
  createdAt: string;
  updatedAt: string;
}

const RecordRow: React.FC<Props> = ({
  id,
  patientName,
  mrn,
  createdAt,
  updatedAt,
}) => {
  const router = useRouter();

  return (
    <Tr
      onClick={() => router.push("/records/" + id)}
      className="cursor-pointer"
    >
      <Th>{patientName}</Th>
      <Th>{mrn}</Th>
      <Th>{format(new Date(createdAt), "P")}</Th>
      <Th>{format(new Date(createdAt), "P")}</Th>
    </Tr>
  );
};

export default RecordRow;
