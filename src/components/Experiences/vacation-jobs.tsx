import { FaSun } from "react-icons/fa6";

const VacationJobs = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaSun size={25} />
                    <h1 className="title">Vacation jobs</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-green-500">Tourist guide</p>
                        <p className="text-sm italic">
                            From Jully to August in 2018, 2019 and 2020
                        </p>
                        <p className="text-sm italic">
                            In Manoir du Grand Taute, 50490 - Saint Sauveur
                            Lendelin, France
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VacationJobs;
