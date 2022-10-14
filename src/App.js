import "./App.css";
import LeftNavigation from "./components/LeftNavigation";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { useRef } from "react";

function App() {
    const leftNavRef = useRef(null);

    const openSideBar = () => {
        leftNavRef.current?.openNav();
    };

    return (
        <div className="bg-black text-white pr-0 smmd:pr-2 lg:pr-18 overflow-hidden">
            <Header openSideBar={openSideBar} />

            <div className="flex justify-start md:gap-2 smmd:gap-4 pr-4 md:pr-0 w-full">
                <LeftNavigation ref={leftNavRef} />
                <Dashboard />
            </div>
        </div>
    );
}

export default App;
