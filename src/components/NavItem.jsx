import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavItem({ name, icon, path, setPath }) {
    return (
        <div
            className={`flex gap-2 items-center sm:justify-center cursor-pointer p-3 sm:p-2 transition-all duration-300 ease-linear rounded-10 group relative w-full sm:w-14 sm:h-14  md:w-18 md:h-18 m-auto ${
                path !== name && "hover:bg-black2"
            } ${path === name && "bg-pink2"} font-semibold`}
            onClick={() => setPath(name)}
        >
            <div className="icon-cont">
                <FontAwesomeIcon
                    icon={icon}
                    className="text-white text-lg smmd:text-2xl"
                />
            </div>
            <div className="nav-text sm:hidden sm:group-hover:block sm:absolute sm:left-full sm:bottom-0 ml-1">
                {name}
            </div>
        </div>
    );
}
