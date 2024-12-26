import { FaBasketball } from "react-icons/fa6";

const Sports = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaBasketball size={25} />
                    <h1 className="title">Sports</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-green-500">Karting</p>
                        <p className="text-sm italic">
                            I love drive cars and karts. I like to share this
                            with friends.
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-green-500">Bike</p>
                        <p className="text-sm italic">
                            Sometimes, I like do bike with my father. Also
                            during my internship in Spain, I used bike a lot to
                            move myself.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sports;
