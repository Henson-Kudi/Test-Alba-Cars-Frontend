import React from "react";

export default function MechanicalService({
    count,
    title,
    value,
    handleChange,
}) {
    return (
        <div className="p-2 rounded-6 bg-light-black flex flex-col md:flex-row md:items-center justify-start md:justify-between relative">
            <div className="left flex gap-2 justify-start items-center">
                <span className="md:absolute md:-left-4 md:top-1/2 md:-translate-y-1/2 border p-1 md:p-2 rounded bg-light-black2 border-gray">
                    {count}
                </span>
                <p className="md:pl-6 text-base lg:text-3xl leading-48">
                    {title}
                </p>
            </div>

            <div className="right rounded-9 bg-light-black2 px-6 py-2 text-base lg:text-2xl">
                <input
                    type="text"
                    name="price"
                    value={value}
                    onChange={handleChange}
                    className="w-full bg-transparent outline-none"
                    placeholder="Enter Price"
                />
            </div>
        </div>
    );
}
