import { PiCertificateFill } from "react-icons/pi";

const Certifications = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <PiCertificateFill size={25} />
                    <h1 className="title">Certifications</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-green-500">PIX* Formation</p>
                        <p className="text-sm">
                            PIX checking code : P-JHBPFVFK
                        </p>
                        <p className="text-sm italic">
                            From September 2019 to Jully 2020
                        </p>
                        <p className="text-sm italic">
                            In Lycée La Morandière, 50400 - Granville, France
                        </p>
                        <p className="text-xs italic">
                            *(Pixels universe certification plateform)
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Certifications;
