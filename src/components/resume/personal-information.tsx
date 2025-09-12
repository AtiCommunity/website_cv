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
                <h1 className="title">Personal information</h1>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-5 justify-between items-center">
                        <FaEnvelope />
                        <a href="mailto:antoine.robin@aticommunity.fr">
                            antoine.robin@aticommunity.fr
                        </a>
                    </div>
                    <div className="flex gap-5 justify-between items-center">
                        <FaPhone />
                        <p>+33641042294</p>
                    </div>
                    <div className="flex gap-5 justify-between items-center">
                        <GiFrance />
                        <p>French nationality</p>
                    </div>
                    <div className="flex gap-5 justify-between items-center">
                        <FaIdCard />
                        <p>European Driving licence (B)</p>
                    </div>
                    <div className="flex gap-5 justify-between items-center">
                        <IoCarSportSharp />
                        <p>Got my own personal car</p>
                    </div>
                </div>
                <div className="flex w-full justify-around">
                    <a
                        href="https://www.linkedin.com/in/atineon/"
                        target="_blank"
                    >
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
