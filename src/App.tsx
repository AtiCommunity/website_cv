import Resume from "./components/resume.tsx";
import Skills from "./components/skills.tsx";
import Formations from "./components/formations.tsx";
import Experiences from "./components/experiences.tsx";
import Interests from "./components/Interests.tsx";

function App() {

  return (
    <>
      <div className="container items-center mx-auto p-5 flex flex-col gap-5">
        <Resume />
        <Skills />
        <Formations />
        <Experiences />
        <Interests />
      </div>
    </>
  )
}

export default App
