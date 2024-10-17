 import { AboutSection, GetInTouch, HomeBanner, Portofolio, Services } from "./components";

export default function Home() {
  return (
    <main className="">
       <HomeBanner/>
       <AboutSection/>
       <Services/>
       <Portofolio/>
       <GetInTouch/>
    </main>
  );
}
