import Image from "next/image";
import { Navbar } from './components/Navbar';
import { Landing } from "./components/Landing";
import { Projects } from "./components/Projects";
import { About } from "./components/About";

export default function Home() {
  return (
    <main className=" items-center justify-between ">
      <Navbar/>
      <Landing/>
      <Projects/>
      <About/>
    </main>
  );
}
