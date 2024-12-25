import { FaUserGraduate } from "react-icons/fa6";

const Degrees = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaUserGraduate size={25} />
                    <h1 className="title">Degrees</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-yellow-500">
                            Master&apos;s Degree in IT Engineering
                        </p>
                        <p className="text-sm italic">
                            From October 2022 to October 2025
                        </p>
                        <p className="text-sm italic">
                            In CESI École d&apos;ingénieurs, 76800 -
                            Saint-Étienne du Rouvray, France
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-green-500">
                            Associate Degree SN IR*
                        </p>
                        <p className="text-sm italic">
                            From September 2020 to Jully 2022
                        </p>
                        <p className="text-sm italic">
                            In Lycée La Morandière, 50400 - Granville, France
                        </p>
                        <p className="text-xs italic">
                            *(Numerical Systems, IT and Networks)
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-green-500">A-Level in STI2D*</p>
                        <p className="text-sm italic">
                            From September 2019 to Jully 2020
                        </p>
                        <p className="text-sm italic">
                            In Lycée La Morandière, 50400 - Granville, France
                        </p>
                        <p className="text-xs italic">
                            *(Technological Sciences of Industry and Sustainable
                            Development)
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Degrees;
