import {
    FaBriefcase,
    FaCheck,
    FaHeart,
    FaQuestion,
    FaStar,
} from "react-icons/fa6";

const Qualities = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaStar size={25} />
                    <h1 className="title">Qualities</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-5 items-center justify-between">
                        <p>Curious</p>
                        <FaQuestion />
                    </div>
                    <div className="flex gap-5 items-center justify-between">
                        <p>Motivated</p>
                        <FaStar />
                    </div>
                    <div className="flex gap-5 items-center justify-between">
                        <p>Pationate</p>
                        <FaHeart />
                    </div>
                    <div className="flex gap-5 items-center justify-between">
                        <p>Persevering</p>
                        <FaCheck />
                    </div>
                    <div className="flex gap-5 items-center justify-between">
                        <p>Picky</p>
                        <FaBriefcase />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Qualities;
