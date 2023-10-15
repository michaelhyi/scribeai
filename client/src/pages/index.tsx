import { Inter } from "next/font/google";
import Container from "../components/Container";
import TotalPatients from "@/components/TotalPatients";
import TotalRecords from "@/components/TotalRecords";
import SmallCalendar from "@/components/SmallCalendar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <div className="px-5 flex">
        <TotalPatients />
        <TotalRecords />
        <SmallCalendar />
      </div>
    </Container>
  );
}
