import Profile from "./resume/profile";
import AboutMe from "./resume/about-me";
import PersonalInformation from "./resume/personal-information";

const Resume = () => {
    return (
        <>
            <div className="container flex flex-col lg:flex-row lg:justify-around items-center p-5 max-w-7xl bg-black/40 border-0 rounded-box">
                <Profile />
                <AboutMe />
                <PersonalInformation />
            </div>
        </>
    );
};

export default Resume;
