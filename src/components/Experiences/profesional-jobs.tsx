import { FaBriefcase } from "react-icons/fa6";

const ProfesionalJobs = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaBriefcase size={25} />
                    <h1 className="title">Profesional jobs</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-yellow-500">
                            IT Engineer Apprenticeship
                        </p>
                        <p className="text-sm italic">
                            From October 2022 to October 2025
                        </p>
                        <p className="text-sm italic">
                            In FactorFX, 50400 - Granville, France
                        </p>
                    </div>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-green-500">Frontend Developer</p>
                        <p className="text-sm italic">
                            From Jully 2024 to November 2024
                        </p>
                        <p className="text-sm italic">
                            In Colanguage, 46024 - València, Spain
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfesionalJobs;
