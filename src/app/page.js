import Image from "next/image";
import {TabsExample} from './components/navbar';

export default function Home() {
  return (
    <main className=" items-center justify-between ">
      <TabsExample></TabsExample>
    </main>
  );
}
