import { t } from "i18next";

const AboutMe = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <h1 className="title">{t("about_me_title")}</h1>
                <p>{t("about_me_resume")}</p>
            </div>
        </>
    );
};

export default AboutMe;
