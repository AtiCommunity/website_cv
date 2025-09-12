import { FaEarthEurope } from "react-icons/fa6";

type LanguageManagerProps = {
    lang: string;
    setLanguage: (lang: string) => void;
};

const LanguageManager = ({ lang, setLanguage }: LanguageManagerProps) => {
    return (
        <>
            <div className="container flex justify-around lg:justify-end items-center mt-5 px-5">
                <div className="dropdown dropdown-hover dropdown-center dropdown-bottom">
                    <div tabIndex={0} role="button" className="btn btn-neutral">
                        <FaEarthEurope />
                        <p>{lang}</p>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-neutral w-20 rounded-box z-1">
                        <li><button onClick={() => { setLanguage("en") }}>🇬🇧 EN</button></li>
                        <li><button onClick={() => { setLanguage("fr") }}>🇫🇷 FR</button></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LanguageManager;
