import React from "react";

export default function ServiceHeading({ image, name, imageClass, contClass }) {
    return (
        <div
            className={`flex items-center gap-4 rounded-9 overflow-hidden bg-green w-full  ${contClass}`}
        >
            <div
                className={`image-cont w-24 h-24 lg:w-154 lg:h-143 p-2 md:p-4 rounded-r-9 overflow-hidden bg-light-green image-shadow shadow-pink ${imageClass}`}
            >
                <img
                    src={image}
                    alt="Mechanical image"
                    className="w-full h-full object-cover rounded-lg bg-transparent text-green"
                />
            </div>
            <h2 className="font-Poppins font-normal text-base lg:text-32 leading-48">
                {name}
            </h2>
        </div>
    );
}
