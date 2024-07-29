import React, {useState, useEffect} from "react"
import ToggleBetweenLightAndDark from "../ToggleBetweenLightAndDark";

const Register = ()=>{
    //true will be light and false is dark
    const [selected, setSelected] = useState(true);
    const handleToggle =()=>{
        setSelected(!selected);
    }

    //The selected is our varibale. by default light is true and dark is false (I don't know why i did it like this)
    const BACKGROUNDCOLOR = selected?"white":"black";
    const TEXTCOLOR = selected?"black":"white";
    useEffect(()=>{
        document.body.style.backgroundColor = BACKGROUNDCOLOR;
        document.body.style.color = TEXTCOLOR;
    }, [BACKGROUNDCOLOR,TEXTCOLOR])
    return(
        //lassName={`h-full ${selected ? "bg-white" : "bg-black"}`}
        <div>
            <ToggleBetweenLightAndDark selected={selected} Toggle={handleToggle} />
            <h1>Welcome to the Register page</h1>
        </div>
    )
}

export default Register;