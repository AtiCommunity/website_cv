import { FaArrowLeft, FaArrowRight, FaFaceSmileWink } from "react-icons/fa6";

const Projects = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaFaceSmileWink size={25} />
                    <h1 className="title">Funny personal projects</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-yellow-500">Project showcase</p>
                        <div className="flex items-center justify-center gap-2">
                            <a
                                href="https://github.com/AtiCommunity"
                                target="_blank"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <FaArrowRight />
                                    <p>GitHub</p>
                                    <FaArrowLeft />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
