import Image from "next/image";
import LandingPage from "./components/Landing-page/page";
import PageTwo from "./components/PageTwo/page";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <PageTwo />
    </main>
  );
}
