import { t } from "i18next";

import { FaHandPointUp } from "react-icons/fa6";

const PointOfInterest = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaHandPointUp size={25} />
                    <h1 className="title">{t("point_of_interest_title")}</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-green-500">
                            {t("point_of_interest_1_title")}
                        </p>
                        <p className="text-sm italic">
                            {t("point_of_interest_1_description")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PointOfInterest;
