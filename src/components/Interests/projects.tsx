import Link from "next/link";

import { FaFaceSmileWink, FaLink } from "react-icons/fa6";

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
                                https://aticommunity.fr
                            </Link>
                            <FaLink />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
