import Languages from "./skills/languages";
import Qualities from "./skills/qualities";
import Softskills from "./skills/softskills";

const Skills = () => {
    return (
        <>
            <div className="container flex flex-col md:flex-row md:justify-around items-center p-5 max-w-7xl bg-black/40 border-0 rounded-box">
                <Qualities />
                <Softskills />
                <Languages />
            </div>
        </>
    );
};

export default Skills;
