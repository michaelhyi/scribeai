import { Inter } from "next/font/google";
import Container from "../components/Container";
import TotalPatients from "@/components/TotalPatients";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <div>home</div>
      <TotalPatients/>
    </Container>
  );
}