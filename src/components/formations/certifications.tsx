import { t } from "i18next";

import { PiCertificateFill } from "react-icons/pi";

const Certifications = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <PiCertificateFill size={25} />
                    <h1 className="title">{t("certifications_title")}</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-green-500">
                            {t("certifications_1_title")}
                        </p>
                        <p className="text-sm">
                            {t("certifications_1_link")}
                        </p>
                        <p className="text-sm italic">
                            {t("certifications_1_date")}
                        </p>
                        <p className="text-sm italic">
                            {t("certifications_1_location")}
                        </p>
                        <p className="text-xs italic">
                            {t("certifications_1_description")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Certifications;
