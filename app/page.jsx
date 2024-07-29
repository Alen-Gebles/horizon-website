import Transition from './Transition'

import LandingPage from "./components/Landing-page/page";
import PageTwo from "./components/PageTwo/page";
import PageThree from "./components/PageThree/page";
import PageFour from "./components/PageFour/page";
import PricePage from "./components/PricePage/page";
import BottomPage from "./components/BottomPage/page";
import Fame from "./components/Fame/page";
import WhatWeDo from './components/WhatWeDo/page';
import ClientTestimonial from "./components/ClientTestemonial/page";

export default function Home() {
  return (
    <main>
      <LandingPage />
      <PageTwo />
      <WhatWeDo />
      <PageThree />
      <PageFour />
      <ClientTestimonial />
      <PricePage />
      <BottomPage />
      <Fame />
    </main>
  );
}
