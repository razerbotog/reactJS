import { createContext, useContext } from "react";

// initialise by creating context by providing value in argument
export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {}
})

// created provider too
export const ThemeProvider = ThemeContext.Provider

// accepting a context object
export default function useTheme(){
    return useContext(ThemeContext)
}