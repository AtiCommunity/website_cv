import { t } from "i18next";

import { FaBasketball } from "react-icons/fa6";

const Sports = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5 xl:max-w-80">
                <div className="flex items-center justify-center gap-2">
                    <FaBasketball size={25} />
                    <h1 className="title">{t("sports_title")}</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-green-500">
                            {t("sports_1_title")}
                        </p>
                        <p className="text-sm italic">
                            {t("sports_1_description")}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-green-500">
                            {t("sports_2_title")}
                        </p>
                        <p className="text-sm italic">
                            {t("sports_2_description")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sports;
