import React, { useEffect, useRef, useState } from "react";
import logo2 from "../assets/logo2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

export default function Header({ openSideBar }) {
    const searchInput = useRef(null);
    const searchInputCont = useRef(null);

    const [searchbox, setSearchbox] = useState("");

    const handleSearchChange = (e) => {
        setSearchbox(e.target.value);
    };

    const handleSearch = () => {
        const { current } = searchInputCont;
        if (!current.classList.contains("show-input")) {
            current.classList.add("show-input");
            searchInput.current.focus();
            return;
        }

        // handle search request to api
    };

    const handleClickOutsideSearch = (e) => {
        const { current } = searchInputCont;
        if (current && !current.contains(e.target)) {
            current.classList.remove("show-input");
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideSearch);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideSearch);
        };
    }, []);

    return (
        <div className="flex gap-4 justify-between items-center p-2 smmd:p-4">
            <div className="flex gap-7 justify-center items-center">
                <div className="logo-container w-18 h-18 overflow-hidden">
                    <img
                        src={logo2}
                        alt="Company"
                        className="logo w-full h-full object-cover rounded-6 border border-pink"
                    />
                </div>

                <div className="welcome-message hidden9">
                    <p className="font-Inter font-bold text-base lg:text-md2 lg:leading-24 text-gray">
                        <span className="block lg:inline">Welcome Back,</span>{" "}
                        <span className="text-purple block lg:inline">
                            CAR SHOP!
                        </span>
                    </p>
                </div>
            </div>

            <div className="flex gap-2 items-center">
                <div
                    className="search-box bg-light-black rounded-6 p-2 text-base lg:text-md2 text-gray relative flex gap-1 items-center w-max smmd:w-96 lg:w-500 transition-all duration-300 ease-linear"
                    ref={searchInputCont}
                >
                    <input
                        type="text"
                        name="searchbox"
                        value={searchbox}
                        onChange={handleSearchChange}
                        className="search-input lg:leading-24 font-bold focus:font-normal outline-none border-r border-r-gray2 bg-transparent w-full hidden smmd:block"
                        placeholder="Search"
                        ref={searchInput}
                    />

                    <FontAwesomeIcon
                        icon={faTimes}
                        className="cancel-button text-gray3 text-base lg:text-2xl absolute top-1/2 -translate-y-1/2 right-12 hidden smmd:block"
                        onClick={() => {
                            setSearchbox("");
                            searchInput.current.focus();
                        }}
                    />

                    <div
                        className="searchbutton pl-1 cursor-pointer w-max"
                        onClick={handleSearch}
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="text-white text-base lg:text-2xl"
                        />
                    </div>
                </div>
                <div
                    className="sm:hidden pl-1 cursor-pointer w-max"
                    onClick={openSideBar}
                >
                    <FontAwesomeIcon
                        icon={faBars}
                        className="text-white text-base lg:text-2xl"
                    />
                </div>
            </div>

            <div className="earning text-center smmd:grid items-center lg:h-18 lg:w-50 rounded-6 linear-border font-Inter font-bold text-xs smmd:text-base leading-19 text-white p-2 hidden">
                <p className="">July Earnings</p>
                <p>
                    <span>AED </span>
                    <span className="text-pink2 lg:text-md2">500,000</span>
                </p>
            </div>
        </div>
    );
}
