import ProfesionalJobs from "./Experiences/profesional-jobs";
import VacationJobs from "./Experiences/vacation-jobs";

const Experiences = () => {
    return (
        <>
            <div className="container flex flex-col lg:flex-row lg:justify-around items-center p-5 bg-black bg-opacity-40 border-0 rounded-box">
                <ProfesionalJobs />
                <VacationJobs />
            </div>
        </>
    );
};

export default Experiences;
