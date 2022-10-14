import React, { useRef, useState } from "react";
import ServiceHeading from "../components/ServiceHeading";
import mechanical from "../assets/mechanical.svg";
import accessories from "../assets/accessories.svg";
import bodyWork from "../assets/bodywork.svg";
import interior from "../assets/interior.svg";
import logo from "../assets/logo.jpg";
import MechanicalService from "../components/MechanicalService";
import AccountDetail from "../components/AccountDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faImage } from "@fortawesome/free-solid-svg-icons";
import pdfDoc from "../assets/Henson-Web-Dev.pdf";
import ModalContainer from "../components/ModalContainer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
    const pdfRef = useRef(null);
    const imageRef = useRef(null);
    const [prices, setPrices] = useState([{ price: "" }]);
    const bookedServices = [
        { value: 50, name: "Rotor Replacement", color: "#5470C6" },
        { value: 40, name: "Brake parts", color: "#91CC75" },
        { value: 10, name: "Shoe Replacement", color: "#FAC858" },
        { value: 10, name: "Brake Fluid", color: "#EE6666" },
    ];

    const data = {
        labels: bookedServices?.map((item) => item.name),
        datasets: [
            {
                label: "Most Booked Services",
                data: bookedServices?.map((item) => item.value),
                backgroundColor: ["#8C6FDE", "#D42358", "#fff", "#502BB8"],
                borderColor: ["#8C6FDE", "#D42358", "#fff", "#502BB8"],
            },
        ],
        options: {
            legend: { position: "bottom" },
        },
    };

    const mechanicalServices = [
        {
            title: "Oil And Filter Service",
        },
        {
            title: "AC gas refill",
        },
        {
            title: "AC filter replacement",
        },
        {
            title: "Disc skimming",
        },
        {
            title: "Wheel balance and alignment",
        },
        {
            title: "Full inspection",
        },
    ];

    const [accountDetails, setAccountDetails] = useState({
        trn: "001214455888",
        location: "The iridium - office 130 - Umm Suqeim st - Dubai",
        city: "Dubai",
        lastname: "Sam",
        email: "Workshopname122333@gmail.com",
        logo: "Workshop_logo.png",
        whorkshopName: "Car workshop",
        country: "UAE",
        firstname: "Ali Ali",
        phone: "0522114488",
        password: "Workshopname122333@gmail.com",
        license: "Trade_license.pdf",
    });

    const handlePricesChange = (name, index) => (e) => {
        let newArr = prices.map((item, i) => {
            if (index === i) {
                return { ...item, [name]: e.target.value };
            } else {
                return item;
            }
        });
        setPrices(newArr);
    };

    return (
        <div className="flex-1 p-4 md:p-8 rounded-t-xl overflow-hidden bg-black2">
            <h2 className="font-normal text-xl smmd:text-2xl md:text-32 leading-38">
                Services
            </h2>

            <div className="mt-2 smmd:mt-4 md:mt-8 bg-light-black2 rounded-9 overflow-hidden">
                <ServiceHeading name={"Mechanical"} image={mechanical} />

                <div className="p-8 flex gap-4 flex-col ">
                    {mechanicalServices?.map((service, i) => (
                        <MechanicalService
                            title={service.title}
                            handleChange={handlePricesChange("price", i)}
                            value={prices[i]?.price}
                            count={i + 1 > 10 ? i : `0${i + 1}`}
                            key={`${service.title}-${i}`}
                        />
                    ))}
                </div>
            </div>

            <div className="other-services">
                <div className="flex gap-4 my-4 items-center flex-wrap w-full flex-col md:flex-row">
                    <ServiceHeading
                        name={"Accessories"}
                        image={accessories}
                        contClass="bg-gray4 flex-1"
                        imageClass={"bg-yellow image-shadow1"}
                    />
                    <ServiceHeading
                        name={"Body Work"}
                        image={bodyWork}
                        contClass="bg-gray4 flex-1"
                        imageClass={"bg-dark-purple image-shadow2"}
                    />
                </div>

                <div className="flex gap-4 my-4 items-center flex-wrap w-full flex-col md:flex-row">
                    <ServiceHeading
                        name={"Interior"}
                        image={interior}
                        contClass="bg-gray4 flex-1"
                        imageClass={"bg-light-pink image-shadow3"}
                    />
                    <ServiceHeading
                        name={"Cleaning"}
                        image={bodyWork}
                        contClass="bg-gray4 flex-1"
                        imageClass={"bg-light-blue image-shadow4"}
                    />
                </div>
            </div>

            <div className="">
                <h2 className="font-normal text-xl smmd:text-2xl md:text-32 leading-38 smmd:py-4 md:py-8">
                    Your Account Details
                </h2>

                <div className="account-details flex flex-wrap gap-2">
                    <div className="left flex flex-col justify-start gap-2 flex-1">
                        <AccountDetail
                            show1
                            label={"TRN"}
                            value={accountDetails.trn}
                            handleChange={(e) =>
                                setAccountDetails((prev) => ({
                                    ...prev,
                                    trn: e.target.value,
                                }))
                            }
                        />
                        <AccountDetail
                            show2
                            label={"Location"}
                            value={accountDetails.location}
                            handleChange={(e) =>
                                setAccountDetails((prev) => ({
                                    ...prev,
                                    location: e.target.value,
                                }))
                            }
                        />
                        <AccountDetail
                            show1
                            label={"City"}
                            value={accountDetails.city}
                            handleChange={(e) =>
                                setAccountDetails((prev) => ({
                                    ...prev,
                                    city: e.target.value,
                                }))
                            }
                        />

                        <AccountDetail
                            show1
                            label={"Person of contact (last name)"}
                            value={accountDetails.lastname}
                            handleChange={(e) =>
                                setAccountDetails((prev) => ({
                                    ...prev,
                                    lastname: e.target.value,
                                }))
                            }
                        />

                        <AccountDetail
                            show2
                            label={"Person of contact (email)"}
                            value={accountDetails.email}
                            handleChange={(e) =>
                                setAccountDetails((prev) => ({
                                    ...prev,
                                    email: e.target.value,
                                }))
                            }
                        />

                        <AccountDetail
                            show2
                            showEye
                            label={"Workshop logo"}
                            value={accountDetails.logo}
                            handleChange={(e) => {
                                const file = e.target.files[0];

                                if (file.name) {
                                    setAccountDetails((prev) => ({
                                        ...prev,
                                        logo: file.name,
                                    }));
                                }
                            }}
                            inputType="file"
                            viewFile={() => imageRef.current?.openModal()}
                        >
                            <FontAwesomeIcon
                                icon={faImage}
                                className="text-xl"
                            />
                        </AccountDetail>
                    </div>

                    <div className="right flex flex-col justify-start gap-2 flex-1">
                        <AccountDetail
                            show1
                            label={"Workshop name"}
                            value={accountDetails.whorkshopName}
                            handleChange={(e) =>
                                setAccountDetails((prev) => ({
                                    ...prev,
                                    whorkshopName: e.target.value,
                                }))
                            }
                        />
                        <AccountDetail
                            show1
                            label={"Workshop name"}
                            value={accountDetails.whorkshopName}
                            handleChange={(e) =>
                                setAccountDetails((prev) => ({
                                    ...prev,
                                    whorkshopName: e.target.value,
                                }))
                            }
                        />

                        <AccountDetail
                            show1
                            label={"Country"}
                            value={accountDetails.country}
                            handleChange={(e) =>
                                setAccountDetails((prev) => ({
                                    ...prev,
                                    country: e.target.value,
                                }))
                            }
                        />

                        <AccountDetail
                            show1
                            label={"Person of contact (first name)"}
                            value={accountDetails.firstname}
                            handleChange={(e) =>
                                setAccountDetails((prev) => ({
                                    ...prev,
                                    firstname: e.target.value,
                                }))
                            }
                        />

                        <AccountDetail
                            show1
                            label={"Person of contact (phone)"}
                            value={accountDetails.phone}
                            handleChange={(e) =>
                                setAccountDetails((prev) => ({
                                    ...prev,
                                    phone: e.target.value,
                                }))
                            }
                        />

                        <AccountDetail
                            show2
                            label={"Person of contact (password)"}
                            value={accountDetails.password}
                            handleChange={(e) =>
                                setAccountDetails((prev) => ({
                                    ...prev,
                                    password: e.target.value,
                                }))
                            }
                        />

                        <AccountDetail
                            show2
                            showEye
                            label={"Trade License"}
                            value={accountDetails.license}
                            handleChange={(e) => {
                                const file = e.target.files[0];

                                if (file.name) {
                                    setAccountDetails((prev) => ({
                                        ...prev,
                                        license: file.name,
                                    }));
                                }
                            }}
                            inputType="file"
                            viewFile={() => pdfRef.current?.openModal()}
                        >
                            <FontAwesomeIcon
                                icon={faFilePdf}
                                className="text-xl"
                            />
                        </AccountDetail>
                    </div>
                </div>
            </div>

            <div className="">
                <div
                    id="Chart"
                    className="w-9/10 mx-auto sm:mx-0 mt-4 sm:w-400 h-max p-4 bg-black3 rounded-2xl justify-center overflow-hidde"
                >
                    <Doughnut
                        data={data}
                        options={{
                            plugins: {
                                legend: {
                                    position: "bottom",
                                    labels: {
                                        color: "#BBBBBB",
                                        padding: 10,
                                        font: () => ({
                                            size:
                                                window.innerWidth < 500
                                                    ? 16
                                                    : 20,
                                            weight: "600",
                                        }),
                                    },
                                    fullSize: true,
                                    align: "start",
                                },
                                title: {
                                    color: "#fff",
                                    text: "Most Booked Services",
                                    display: true,
                                    fullSize: true,
                                    position: "top",
                                },
                            },
                        }}
                    />
                </div>
            </div>

            <ModalContainer ref={pdfRef}>
                <div className="w-full h-full">
                    <iframe
                        src={pdfDoc}
                        frameBorder="1"
                        width={"100%"}
                        height={"100%"}
                    ></iframe>
                </div>
            </ModalContainer>
            <ModalContainer ref={imageRef}>
                <div className="w-full h-full">
                    <img
                        src={logo}
                        alt="sample display image"
                        className="w-full h-full object-contain"
                    />
                </div>
            </ModalContainer>
        </div>
    );
}
