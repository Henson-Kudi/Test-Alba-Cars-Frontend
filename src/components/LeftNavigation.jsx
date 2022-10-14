import {
    faCalendarCheck,
    faCalendarDays,
    faFileInvoice,
    faGear,
    faHeadphones,
    faHouse,
    faSackDollar,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
    forwardRef,
    useImperativeHandle,
    useRef,
    useState,
} from "react";
import NavItem from "./NavItem";

export default forwardRef(function (props, ref) {
    const navs = [
        {
            icon: faHouse,
            name: "Home",
        },
        {
            icon: faCalendarDays,
            name: "Nav2",
        },
        {
            icon: faCalendarCheck,
            name: "Nav3",
        },
        {
            icon: faSackDollar,
            name: "Nav4",
        },
        {
            icon: faFileInvoice,
            name: "Nav5",
        },
        {
            icon: faCalendarDays,
            name: "Nav6",
        },
        {
            icon: faGear,
            name: "Nav7",
        },
        {
            icon: faHeadphones,
            name: "Nav8",
        },
    ];

    const contRef = useRef(null);

    const [path, setPath] = useState("Home");

    useImperativeHandle(ref, () => {
        return {
            closeNav,
            openNav,
        };
    });

    const openNav = () => {
        contRef.current.classList.add("show-nav");
    };

    const closeNav = () => {
        contRef.current.classList.remove("show-nav");
    };

    return (
        <div
            className=" p-2 sm:mx-auto  pt-7 sm:w-max  md:min-w-120 md:pt-23 absolute sm:relative top-0 -left-full sm:left-0 w-full h-screen sm:h-full z-20 bg-black-trans sm:bg-transparent transition-all duration-300 ease-linear invisible sm:visible side-nav"
            ref={contRef}
        >
            <div className="flex sm:justify-center sm:items-center gap-2 flex-col  w-4/5">
                {navs?.map((item, i) => (
                    <NavItem
                        key={`${item.name}-${i}`}
                        icon={item.icon}
                        name={item.name}
                        path={path}
                        setPath={setPath}
                    />
                ))}
            </div>

            <div
                className="sm:hidden py-2 px-4 rounded-md cursor-pointer w-max bg-light-black absolute top-7 right-3"
                onClick={closeNav}
            >
                <FontAwesomeIcon
                    icon={faTimes}
                    className=" text-white text-2xl"
                />
            </div>
        </div>
    );
});
