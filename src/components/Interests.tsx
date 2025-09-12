import PointOfInterest from "./Interests/point-of-interest";
import Projects from "./Interests/projects";
import Sports from "./Interests/sports";

const Interests = () => {
    return (
        <>
            <div className="container flex flex-col xl:flex-row xl:justify-around items-center p-5 max-w-7xl bg-black/40 border-0 rounded-box">
                <Projects />
                <PointOfInterest />
                <Sports />
            </div>
        </>
    );
};

export default Interests;
