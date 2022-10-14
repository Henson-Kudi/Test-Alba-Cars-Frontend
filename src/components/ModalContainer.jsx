import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

export default forwardRef(function ModalContainer({ children }, ref) {
    const modalRef = useRef(null);

    useImperativeHandle(ref, () => ({
        openModal,
        closeModal,
    }));

    const openModal = () => {
        modalRef.current.classList.add("show-modal");
    };

    const closeModal = () => {
        modalRef.current.classList.remove("show-modal");
    };

    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black-trans overflow-hidden backdrop-blur-xl+ flex justify-center items-center modal-cont"
            ref={modalRef}
        >
            <div
                className="w-max p-3 flex justify-center items-center rounded-6 bg-light-black cursor-pointer absolute top-4 right-10"
                onClick={closeModal}
            >
                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </div>

            <div className="w-4/5 h-full">{children}</div>
        </div>
    );
});
