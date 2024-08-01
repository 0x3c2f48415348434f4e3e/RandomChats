import React, { useEffect } from "react";
import ToggleBetweenLightAndDark from "../ToggleBetweenLightAndDark";
import { useTheme } from "../MyContext";

const Contact: React.FC = () => {
    const { selected, toggleTheme } = useTheme();
    const BACKGROUNDCOLOR = selected ? "white" : "black";
    const TEXTCOLOR = selected ? "black" : "white";

    useEffect(() => {
        document.body.style.backgroundColor = BACKGROUNDCOLOR;
        document.body.style.color = TEXTCOLOR;
    }, [BACKGROUNDCOLOR, TEXTCOLOR]);

    return (
        <div className={`${selected ? "bg-white" : "bg-black"}`}>
            <ToggleBetweenLightAndDark selected={selected} Toggle={toggleTheme} />
            <h1>Welcome to the Home page</h1>
        </div>
    );
};

export default Contact;