import React, { useState } from "react";
import "./index.css";
import FloatingWindow from "../styled_components/FloatingWindow";

function Index({ position, showFloatingWindow, floatingWindowRef }) {
    const [offset, setOffset] = useState("");
    const handleDragOver = (event) => {
        let floating_window_offset = offset.split(",");
        let floating_widnow = floatingWindowRef.current;
        let top = event.clientY + parseInt(floating_window_offset[1], 10);
        let left = event.clientX + parseInt(floating_window_offset[0], 10);

        if (top < 61) {
            top = 61;
        } else if (top > 261) {
            top = 261;
        }

        if (left < 0) {
            left = 0;
        } else if (left > window.innerWidth - 300) {
            left = window.innerWidth - 300;
        }

        floating_widnow.style.left = left + "px";
        floating_widnow.style.top = top + "px";
        floating_widnow.style.bottom = "unset";

        event.preventDefault();
        return false;
    };
    const handleDrop = (event) => {
        let floating_window_offset = offset.split(",");
        let floating_widnow = floatingWindowRef.current;
        let top = event.clientY + parseInt(floating_window_offset[1], 10);
        let left = event.clientX + parseInt(floating_window_offset[0], 10);

        if (top < 61) {
            top = 61;
        } else if (top > 261) {
            top = 261;
        }

        if (left < 0) {
            left = 0;
        } else if (left > window.innerWidth - 300) {
            left = window.innerWidth - 300;
        }

        floating_widnow.style.left = left + "px";
        floating_widnow.style.top = top + "px";
        floating_widnow.style.bottom = "unset";

        event.preventDefault();
        return false;
    };
    return (
        <section
            className="main__container"
            onDragOver={(event) => handleDragOver(event)}
            onDrop={(event) => handleDrop(event)}
        >
            <FloatingWindow
                showFloatingWindow={showFloatingWindow}
                position={position}
                floatingWindowRef={floatingWindowRef}
                setOffset={setOffset}
            />
        </section>
    );
}

export default Index;
