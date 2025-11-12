import { useTranslation } from "react-i18next";

import LanguageManager from "./components/languageManager.tsx";
import Resume from "./components/resume.tsx";
import Skills from "./components/skills.tsx";
import Formations from "./components/formations.tsx";
import Experiences from "./components/experiences.tsx";
import Interests from "./components/Interests.tsx";

function App() {
  const { i18n } = useTranslation();

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <LanguageManager
        lang={i18n.language.toUpperCase()}
        setLanguage={setLanguage}
      />
      <div className="container items-center mx-auto p-5 flex flex-col gap-5 text-sm sm:text-base">
        <Resume />
        <Skills />
        <Formations />
        <Experiences />
        <Interests />
      </div>
    </>
  );
}

export default App;
