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
                        <p className="text-green-500">Karting</p>
                        <p className="text-sm italic">
                            I love drive cars and karts. I wonder to share this
                            with some friends.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-green-500">Bike</p>
                        <p className="text-sm italic">
                            In Spain, I used a lot bike to move myself. I also
                            like sometimes do bike with my father.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PointOfInterest;
