import Certifications from "./formations/certifications";
import Degrees from "./formations/degrees";

const Formations = () => {
    return (
        <>
            <div className="container flex flex-col lg:flex-row lg:justify-around items-center p-5 max-w-7xl bg-black/40 border-0 rounded-box">
                <Degrees />
                <Certifications />
            </div>
        </>
    );
};

export default Formations;
