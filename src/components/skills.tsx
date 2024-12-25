import Languages from "./skills/languages";
import Qualities from "./skills/qualities";
import Softskills from "./skills/softskills";

const Skills = () => {
    return (
        <>
            <div className="container flex flex-col lg:flex-row lg:justify-around items-center p-5 bg-black bg-opacity-40 border-0 rounded-box">
                <Qualities />
                <Softskills />
                <Languages />
            </div>
        </>
    );
};

export default Skills;
