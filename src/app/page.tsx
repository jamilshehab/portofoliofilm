 import { AboutSection, GetInTouch, HomeBanner,  Portofolio, Services,   StickySocialMedia } from "./components";

export default function Home() {
  return (
    <main className="">
       <HomeBanner/>
       <AboutSection/>
       <Services/>
       <Portofolio/>
       <GetInTouch/>
       <StickySocialMedia/>
    </main>
  );
}
