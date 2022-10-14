import { faCheck, faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

export default function AccountDetail({
    children,
    show1,
    show2,
    showEye,
    value,
    file,
    handleChange,
    label,
    inputType,
    viewFile,
}) {
    const [edit, setEdit] = useState(false);
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);

    return (
        <div className=" bg-light-black p-2 rounded-6">
            <div className="flex justify-between items-center gap-4">
                <div className="label flex justify-start flex-1 items-center gap-2">
                    <p className="w-max md:text-lg text-base text-white">
                        {label}:
                    </p>
                    <div>
                        {inputType === "file" && show1 && (
                            <label
                                htmlFor="inputFile"
                                onClick={() => inputRef.current.click()}
                                className={`bg-transparent rounded-md  border-gray5 text-gray5 outline-none p-1 text-base md:text-lg  ${
                                    edit && "border"
                                } ${!show1 && "hidden"} ${
                                    !inputType === "file" &&
                                    "invisible absolute -z-10"
                                }`}
                            >
                                {value}
                            </label>
                        )}
                        <input
                            type={inputType}
                            className={`bg-transparent rounded-md  border-gray5 text-gray5 outline-none p-1 text-base md:text-lg ${
                                edit && "border"
                            } ${!show1 && "hidden"} ${
                                inputType === "file" &&
                                "invisible absolute -z-10"
                            }`}
                            disabled={!edit}
                            value={inputType === "file" ? file : value}
                            onChange={handleChange}
                            ref={inputRef}
                            id="inputFile"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div
                        className={`rounded-6 p-1 bg-pink flex justify-center items-center cursor-pointer ${
                            !showEye && "hidden"
                        }`}
                        onClick={viewFile}
                    >
                        <FontAwesomeIcon icon={faEye} className="md:text-2xl" />
                    </div>
                    <div
                        className="rounded-6 p-1 bg-purple flex justify-center items-center cursor-pointer"
                        onClick={() => {
                            setEdit(true);
                            inputRef.current.focus();
                            inputRef2.current.focus();
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faEdit}
                            className="md:text-2xl"
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
                {show2 && (
                    <div className="flex justify-center items-center">
                        {children}
                    </div>
                )}
                <div className="flex-1">
                    <div className="relative">
                        {inputType === "file" && show2 && (
                            <label
                                className={`bg-transparent rounded-md  border-gray5 text-gray5 outline-none p-1 w-full md:text-lg text-base  ${
                                    edit && "border"
                                } ${!show2 && "hidden"} ${
                                    !inputType === "file" &&
                                    "invisible absolute -z-10"
                                }`}
                                htmlFor="inputFile2"
                                onClick={() => inputRef2.current.click()}
                            >
                                {value}
                            </label>
                        )}
                        <input
                            type={inputType}
                            className={`bg-transparent rounded-md  border-gray5 text-gray5 outline-none p-1 w-full md:text-lg text-base mb-4  ${
                                edit && "border"
                            } ${!show2 && "hidden"} ${
                                inputType === "file" &&
                                "invisible absolute -z-10"
                            }`}
                            disabled={!edit}
                            value={inputType === "file" ? file : value}
                            onChange={handleChange}
                            ref={inputRef2}
                            id="inputFile2"
                        />
                    </div>
                </div>
                <div
                    className={`rounded-6 p-1 bg-dark-purple flex justify-center items-center cursor-pointer ${
                        !edit && "hidden"
                    } `}
                    onClick={() => setEdit(false)}
                >
                    <FontAwesomeIcon icon={faCheck} className="text-2xl" />
                </div>
            </div>
        </div>
    );
}
