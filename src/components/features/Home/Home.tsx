import Landing from "./Landing";
import AboutMe from "./AboutMe";

function Home() {
  return (
    <main className="max-w-screen px-[8vw] 2xl:px-[12vw]">
      <Landing />
      <AboutMe />
    </main>
  );
}

export default Home;
