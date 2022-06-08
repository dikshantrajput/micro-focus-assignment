import React, { useState, useEffect, useRef } from "react";
import Header from "../Header/Index";
import Footer from "../Footer/Index";
import MainScreen from "../MainScreen/Index";
import { useLocation } from "react-router-dom";

function Index() {
    const location = useLocation();
    const ESC_KEY_CODE = 27;
    const ENTER_KEY_CODE = 13;
    const [position, setPosition] = useState(
        location?.state?.position ? location?.state?.position : "floating"
    );
    const [showFloatingWindow, setShowFloatingWindow] = useState(true);
    const floatingWindowRef = useRef(null);

    const switchBox = (e) => {
        if (e.keyCode === ESC_KEY_CODE) {
            //hide
            setShowFloatingWindow(false);
        }
        if (e.keyCode === ENTER_KEY_CODE) {
            //show
            setShowFloatingWindow(true);
        }
    };
    useEffect(() => {
        //key press event
        document.addEventListener("keydown", (e) => switchBox(e));
        return () => {
            document.removeEventListener("keydown", () =>
                console.log("removing event listener from document")
            );
        };
    }, []);

    return (
        <div className="main__wrapper">
            <div className="top__group">
                <Header
                    position={position}
                    setPosition={setPosition}
                    floatingWindowRef={floatingWindowRef}
                />
                <MainScreen
                    position={position}
                    showFloatingWindow={showFloatingWindow}
                    floatingWindowRef={floatingWindowRef}
                />
            </div>
            <div className="stick__to__bottom">
                <Footer />
            </div>
        </div>
    );
}

export default Index;
