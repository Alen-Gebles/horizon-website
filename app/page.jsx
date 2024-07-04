import Image from "next/image";
import LandingPage from "./components/Landing-page/page";
import PageTwo from "./components/PageTwo/page";
import PageThree from "./components/PageThree/page";
import PageFour from "./components/PageFour/page";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <PageTwo />
      <PageThree />
      <PageFour />
    </main>
  );
}
