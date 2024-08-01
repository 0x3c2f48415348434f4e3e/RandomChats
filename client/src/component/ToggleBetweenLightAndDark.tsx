import { motion } from "framer-motion";
//import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";


interface ToggleBetweenLightAndDarkProps {
  selected: boolean;
  Toggle: () => void;
}

//<span className="relative z-10">Light</span>
//<span className="relative z-10">Dark</span>
const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";
//{selected: string, setSelected}
const ToggleBetweenLightAndDark : React.FC<ToggleBetweenLightAndDarkProps> = ({ selected, Toggle }) =>{
    return(
        //relative flex w-fit items-center rounded-full content-center
        <div className="relative flex items-center w-fit">
            <button className={`${TOGGLE_CLASSES} ${
          selected ? "text-white" : "text-slate-300"
        }`}
        onClick={()=>{
            Toggle();
        }}
        >
            <FiMoon className="relative z-10 text-lg md:text-sm"/>
            
        </button>
        <button
        className={`${TOGGLE_CLASSES} ${
          !selected ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          Toggle();
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          !selected  ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          //w-1/2
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
        </div>
    )
}

export default ToggleBetweenLightAndDark;