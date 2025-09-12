import { t } from "i18next";

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
                    <h1 className="title">{t("qualities_title")}</h1>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-5 items-center justify-between">
                        <p>{t("qualities_1")}</p>
                        <FaQuestion />
                    </div>
                    <div className="flex gap-5 items-center justify-between">
                        <p>{t("qualities_2")}</p>
                        <FaStar />
                    </div>
                    <div className="flex gap-5 items-center justify-between">
                        <p>{t("qualities_3")}</p>
                        <FaHeart />
                    </div>
                    <div className="flex gap-5 items-center justify-between">
                        <p>{t("qualities_4")}</p>
                        <FaCheck />
                    </div>
                    <div className="flex gap-5 items-center justify-between">
                        <p>{t("qualities_5")}</p>
                        <FaBriefcase />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Qualities;
