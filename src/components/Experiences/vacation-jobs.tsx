import { t } from "i18next";

import { FaSun } from "react-icons/fa6";

const VacationJobs = () => {
  return (
    <>
      <div className="flex flex-col sm:w-full sm:text-wrap gap-10 p-5">
        <div className="flex items-center justify-center gap-2">
          <FaSun size={25} />
          <h1 className="title">{t("vacation_jobs_title")}</h1>
        </div>
        <div className="flex flex-col text-center gap-6">
          <div className="flex flex-col">
            <p className="text-green-500">{t("vacation_jobs_1_title")}</p>
            <p className="text-sm italic">{t("vacation_jobs_1_date")}</p>
            <p className="text-sm italic">{t("vacation_jobs_1_location")}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VacationJobs;
