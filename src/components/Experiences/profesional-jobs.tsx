import { t } from "i18next";

import { FaBriefcase } from "react-icons/fa6";

const ProfesionalJobs = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <div className="flex items-center justify-center gap-2">
                    <FaBriefcase size={25} />
                    <h1 className="title">{t('professional_jobs_title')}</h1>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-yellow-500">
                            {t('professional_jobs_1_title')}
                        </p>
                        <p className="text-sm italic">
                            {t('professional_jobs_1_date')}
                        </p>
                        <p className="text-sm italic">
                            {t('professional_jobs_1_location')}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col text-center gap-6">
                    <div className="flex flex-col">
                        <p className="text-green-500">
                            {t('professional_jobs_2_title')}
                        </p>
                        <p className="text-sm italic">
                            {t('professional_jobs_2_date')}
                        </p>
                        <p className="text-sm italic">
                            {t('professional_jobs_2_location')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfesionalJobs;
