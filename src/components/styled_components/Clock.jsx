import React, { useState, useEffect } from "react";
import { formatFullTime } from "../../helpers";

function Clock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const intervalId = setInterval(() => {
            let date = new Date();
            let hours = formatFullTime(date.getHours());
            let minutes = formatFullTime(date.getMinutes());
            let seconds = formatFullTime(date.getSeconds());
            setTime(`${hours} : ${minutes} : ${seconds}`);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return <div className="clock__container">{time}</div>;
}

export default Clock;
