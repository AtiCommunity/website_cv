import { t } from "i18next";

import { FaBriefcase } from "react-icons/fa6";

const ProfesionalJobs = () => {
  return (
    <>
      <div className="flex flex-col sm:w-full sm:text-wrap gap-10 p-5">
        <div className="flex items-center justify-center gap-2">
          <FaBriefcase size={25} />
          <h1 className="title">{t("professional_jobs_title")}</h1>
        </div>
        <div className="flex flex-col text-center gap-6">
          <div className="flex flex-col">
            <p className="text-green-500">{t("professional_jobs_1_title")}</p>
            <p className="text-sm italic">{t("professional_jobs_1_date")}</p>
            <p className="text-sm italic">
              {t("professional_jobs_1_location")}
            </p>
            <div className="sm:w-sm mx-auto text-justify mt-2">
              <ul>
                <li className="text-sm italic">
                  {t("professional_jobs_1_description_1")}
                </li>
                <li className="text-sm italic">
                  {t("professional_jobs_1_description_2")}
                </li>
                <li className="text-sm italic">
                  {t("professional_jobs_1_description_3")}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center gap-6">
          <div className="flex flex-col">
            <p className="text-green-500">{t("professional_jobs_2_title")}</p>
            <p className="text-sm italic">{t("professional_jobs_2_date")}</p>
            <p className="text-sm italic">
              {t("professional_jobs_2_location")}
            </p>
            <div className="sm:w-sm mx-auto text-justify mt-2">
              <ul>
                <li className="text-sm italic">
                  {t("professional_jobs_2_description_1")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfesionalJobs;
