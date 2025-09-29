import { t } from "i18next";

import { FaBriefcase } from "react-icons/fa6";

const Softskills = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaBriefcase size={25} />
                    <h1 className="title">{t("softskills_title")}</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2 items-center">
                        <p>{t("softskills_1")}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                            <div className="bg-green-500 h-2.5 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p>{t("softskills_2")}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                            <div className="bg-green-500 h-2.5 rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p>{t("softskills_3")}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                            <div className="bg-green-500 h-2.5 rounded-full w-9/12"></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <p>{t("softskills_4")}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                            <div className="bg-yellow-500 h-2.5 rounded-full w-8/12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Softskills;
