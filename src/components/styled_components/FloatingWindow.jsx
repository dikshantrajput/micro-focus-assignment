import React, { useEffect, useState } from "react";
import "./floating_window.css";

function FloatingWindow({ showFloatingWindow, position, floatingWindowRef, setOffset }) {
    const [text, setText] = useState("");
    const [className, setClassName] = useState("");
    const handleDragStart = (event) => {
        event.dataTransfer.setDragImage(
            event.target,
            window.outerWidth,
            window.outerHeight
        );
        var style = window.getComputedStyle(event.target, null);
        var offset_str =
            parseInt(
                style.getPropertyValue("left") === "auto"
                    ? 0
                    : style.getPropertyValue("left")
            ) -
            event.clientX +
            "," +
            (parseInt(
                style.getPropertyValue("top") === "auto"
                    ? 0
                    : style.getPropertyValue("top")
            ) -
                event.clientY);
        setOffset(offset_str);
    };

    useEffect(() => {
        switch (position) {
            case "center":
                setText("Center");
                setClassName("center");
                break;
            case "floating":
                setText("Floating...");
                setClassName("floating");
                break;
            case "lower_right":
                setText("Lower Right");
                break;
            case "center_v2":
                setText("Center");
                setClassName("center_v2");
                break;
        }
    }, [position]);
    return (
        <div
            className={`floating__window ${className} ${! showFloatingWindow && "none"}`}
            draggable
            onDragStart={(event) => handleDragStart(event)}
            ref={floatingWindowRef}
            style={
                position === "center_v2"
                    ? { left: "calc(50% - 150px)", top: "calc(50% - 100px)" }
                    : {}
            }
        >
            <span className="position__text">{text}</span>
            <span className="bottom__text">Drag me around...</span>
        </div>
    );
}

export default FloatingWindow;
