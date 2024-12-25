import PointOfInterest from "./Interests/point-of-interest";
import Projects from "./Interests/projects";
import Sports from "./Interests/sports";

const Interests = () => {
    return (
        <>
            <div className="container flex flex-col lg:flex-row lg:justify-around items-center p-5 bg-black bg-opacity-40 border-0 rounded-box">
                <Projects />
                <PointOfInterest />
                <Sports />
            </div>
        </>
    );
};

export default Interests;
