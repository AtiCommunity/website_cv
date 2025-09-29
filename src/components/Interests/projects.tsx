import { t } from "i18next";

import { FaArrowLeft, FaArrowRight, FaFaceSmileWink } from "react-icons/fa6";

const Projects = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaFaceSmileWink size={25} />
                    <h1 className="title">{t("projects_title")}</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-yellow-500">
                            {t("projects_1_title")}
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <a href={t("projects_1_link")} target="_blank">
                                <div className="flex items-center justify-center gap-2">
                                    <FaArrowRight />
                                    <p>{t("projects_link_button")}</p>
                                    <FaArrowLeft />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-yellow-500">
                            {t("projects_2_title")}
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <a href={t("projects_2_link")} target="_blank">
                                <div className="flex items-center justify-center gap-2">
                                    <FaArrowRight />
                                    <p>{t("projects_link_button")}</p>
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
