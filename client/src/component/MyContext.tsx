import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// Define the shape of the context value
interface ThemeContextType {
    selected: boolean;
    toggleTheme: () => void;
}

// Provide a default value for the context
const defaultContextValue: ThemeContextType = {
    selected: true,
    toggleTheme: () => {}
};

// Create the context with the default value
export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

// Define the props for the ThemeProvider
interface ThemeProviderProps {
    children: ReactNode;
}

// ThemeProvider component to manage the theme state and provide the context value
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [selected, setSelected] = useState(() => {
        const storedTheme = localStorage.getItem("selectedTheme");
        return storedTheme ? JSON.parse(storedTheme) : true;
    });

    const toggleTheme = () => {
        setSelected((prevSelected:any) => {
            const newSelected = !prevSelected;
            localStorage.setItem("selectedTheme", JSON.stringify(newSelected));
            return newSelected;
        });
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("selectedTheme");
        if (storedTheme) {
            setSelected(JSON.parse(storedTheme));
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ selected, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);



