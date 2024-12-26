import Link from "next/link";

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
                            <Link
                                href="https://aticommunity.fr"
                                target="_blank"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <FaArrowRight />
                                    <p>aticommunity.fr</p>
                                    <FaArrowLeft />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
