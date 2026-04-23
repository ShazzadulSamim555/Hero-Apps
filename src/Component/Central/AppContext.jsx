import { createContext, useEffect, useState } from "react"; 

export const AppContext = createContext(); 

export const AppProvider = ({ children }) => {
    const [apps, setApps] = useState([]);

    useEffect(() => {
        fetch('appData.json')
            .then(res => res.json())
            .then(data => setApps(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <AppContext.Provider value={{ apps }}>
            {children}
        </AppContext.Provider>
    );
};