import { t } from "i18next";

import {
  FaEnvelope,
  FaLinkedin,
  FaIdCard,
  FaPhone,
  FaSquareGithub,
} from "react-icons/fa6";
import { GiFrance } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";

const PersonalInformation = () => {
  return (
    <>
      <div className="flex flex-col gap-10 p-5">
        <h1 className="title">{t("personal_information_title")}</h1>
        <div className="flex flex-col gap-2">
          <div className="flex gap-5 justify-between items-center">
            <FaEnvelope />
            <a
              href="mailto:antoine.robin+jobs@aticommunity.fr"
              className="w-max"
            >
              antoine.robin+jobs@aticommunity.fr
            </a>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <FaPhone />
            <p className="w-max">+33 6 41 04 22 94</p>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <GiFrance />
            <p className="w-max">{t("personal_information_nationality")}</p>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <FaIdCard />
            <p className="w-max">{t("personal_information_driving_licence")}</p>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <IoCarSportSharp />
            <p className="w-max">{t("personal_information_car_owner")}</p>
          </div>
        </div>
        <div className="flex w-full justify-around">
          <a href="https://www.linkedin.com/in/atineon/" target="_blank">
            <FaLinkedin size={35} />
          </a>
          <a href="https://github.com/Atineon" target="_blank">
            <FaSquareGithub size={35} />
          </a>
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
