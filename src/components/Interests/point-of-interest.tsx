import { FaHandPointUp } from "react-icons/fa6";

const PointOfInterest = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaHandPointUp size={25} />
                    <h1 className="title">Point of interest</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-green-500">Video games</p>
                        <p className="text-sm italic">
                            I spent most of my time on video games. I find some
                            freedom on it.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PointOfInterest;
