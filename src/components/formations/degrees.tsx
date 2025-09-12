import { t } from "i18next";

import { FaUserGraduate } from "react-icons/fa6";

const Degrees = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaUserGraduate size={25} />
                    <h1 className="title">{t("degrees_title")}</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-yellow-500">
                            {t("degrees_1_title")}
                        </p>
                        <p className="text-sm italic">
                            {t("degrees_1_date")}
                        </p>
                        <p className="text-sm italic">
                            {t("degrees_1_location")}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-green-500">
                            {t("degrees_2_title")}
                        </p>
                        <p className="text-sm italic">
                            {t("degrees_2_date")}
                        </p>
                        <p className="text-sm italic">
                            {t("degrees_2_location")}
                        </p>
                        <p className="text-xs italic">
                            {t("degrees_2_description")}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-green-500">
                            {t("degrees_3_title")}
                        </p>
                        <p className="text-sm italic">
                            {t("degrees_3_date")}
                        </p>
                        <p className="text-sm italic">
                            {t("degrees_3_location")}
                        </p>
                        <p className="text-xs italic">
                            {t("degrees_3_description")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Degrees;
