import { FaEarthEurope } from "react-icons/fa6";

type LanguageManagerProps = {
    lang: string;
    setLanguage: (lang: string) => void;
};

const LanguageManager = ({ lang, setLanguage }: LanguageManagerProps) => {
    return (
        <>
            <div className="dropdown dropdown-hover dropdown-center dropdown-bottom top-0 right-0 m-5 fixed">
                <div tabIndex={0} role="button" className="btn btn-neutral">
                    <FaEarthEurope />
                    <p>{lang}</p>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-neutral w-20 rounded-box z-1">
                    <li><button onClick={() => { setLanguage("en") }}>🇬🇧 EN</button></li>
                    <li><button onClick={() => { setLanguage("fr") }}>🇫🇷 FR</button></li>
                </ul>
            </div>
        </>
    );
};

export default LanguageManager;
