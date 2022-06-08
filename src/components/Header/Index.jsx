import React from "react";
import Clock from "../styled_components/Clock";
import "./index.css";

function Index({ position, setPosition, floatingWindowRef }) {
    const handleCenterPosition = () => {
        setPosition("center");
        floatingWindowRef.current.style.left = "calc(50% - 150px)";
        floatingWindowRef.current.style.top = "calc(50% - 100px)";
        floatingWindowRef.current.style.right = "unset";
        floatingWindowRef.current.style.bottom = "unset";
    };

    const handleLowerRightPosition = () => {
        setPosition("lower_right");
        floatingWindowRef.current.style.left = "unset";
        floatingWindowRef.current.style.top = "unset";
        floatingWindowRef.current.style.right = "0";
        floatingWindowRef.current.style.bottom = "73.85px";
    };
    return (
        <header>
            <div className="left__container">
                <span>Position :</span>
                <input
                    type="radio"
                    name="position"
                    id="center"
                    onChange={handleCenterPosition}
                    checked={position === "center_v2" || position === "center"}
                />
                <label htmlFor="center">Center</label>
                <input
                    type="radio"
                    name="position"
                    id="lower_right"
                    onChange={handleLowerRightPosition}
                />
                <label htmlFor="lower_right">Lower Right</label>
            </div>
            <div className="right__container">
                <p>Press ESC to hide the window and Enter to show it again</p>
                <Clock />
            </div>
        </header>
    );
}

export default Index;
