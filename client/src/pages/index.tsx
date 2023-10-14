import { Inter } from "next/font/google";
import Container from "../components/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <div>home</div>
    </Container>
  );
}