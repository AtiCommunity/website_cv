import Image from "next/image";
import profilePic from "@/public/profile.jpg";

const Profile = () => {
    return (
        <>
            <div className="flex flex-col p-5">
                <Image
                    className="max-w-60 border-4 rounded-box"
                    src={profilePic}
                    alt="profile"
                />
                <p className="title">Antoine ROBIN</p>
            </div>
        </>
    );
};

export default Profile;
