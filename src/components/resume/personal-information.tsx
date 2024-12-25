import Link from "next/link";
import {
    FaEnvelope,
    FaLinkedin,
    FaIdCard,
    FaPhone,
    FaSquareGithub,
} from "react-icons/fa6";

const PersonalInformation = () => {
    return (
        <>
            <div className="flex flex-col gap-10 p-5">
                <h1 className="title">Personal information</h1>
                <div className="flex flex-col gap-2">
                    <div className="flex gap-5 justify-between items-center">
                        <FaEnvelope />
                        <Link href="mailto:antoine.robin@aticommunity.fr">
                            antoine.robin@aticommunity.fr
                        </Link>
                    </div>
                    <div className="flex gap-5 justify-between items-center">
                        <FaPhone />
                        <p>+33641042294</p>
                    </div>
                    <div className="flex gap-5 justify-between items-center">
                        <FaIdCard />
                        <p>French nationality</p>
                    </div>
                </div>
                <div className="flex w-full justify-around">
                    <Link
                        href="https://www.linkedin.com/in/atineon/"
                        target="_blank"
                    >
                        <FaLinkedin size={35} />
                    </Link>
                    <Link href="https://github.com/Atineon" target="_blank">
                        <FaSquareGithub size={35} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default PersonalInformation;
