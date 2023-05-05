import { createContext, useState } from "react";
const EndPointContext = createContext()
const EndPointProvider = ({ children }) => {
    return (
        <EndPointContext.Provider value={{ endpoint: "http://0.0.0.0:8000/api" }}>
            {children}
        </EndPointContext.Provider>
    )
}
export { EndPointProvider, EndPointContext };