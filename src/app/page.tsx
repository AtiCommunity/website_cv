import Resume from "../components/resume";
import Skills from "../components/skills";
import Formations from "../components/formations";
import Experiences from "../components/experiences";
import Interests from "../components/Interests";

export default function Home() {
    return (
        <>
            <div className="container mx-auto p-5 flex flex-col gap-5">
                <Resume />
                <Skills />
                <Formations />
                <Experiences />
                <Interests />
            </div>
        </>
    );
}
