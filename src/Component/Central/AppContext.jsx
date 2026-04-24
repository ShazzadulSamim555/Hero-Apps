import { createContext, useEffect, useState } from "react"; 
import { toast } from "react-toastify";

export const AppContext = createContext(); 

export const AppProvider = ({ children }) => {
    const [apps, setApps] = useState([]);
    const [installedApps, setInstalledApps]=useState([]);
    useEffect(() => {
        fetch('appData.json')
            .then(res => res.json())
            .then(data => setApps(data))
            .catch(err => console.error(err));
    }, []);

    const uninstall = (id)=>{
        const remaining= installedApps.filter((app)=> app !== id);
        setInstalledApps(remaining);
        toast.error("Uninstall Done.");
    }

    const installApps=(id)=>{
        if(!installedApps.includes(id)){
            setInstalledApps([...installedApps,id]);
            toast.success("App Installed Successfully.")
        }
        else{
            toast.warning("This App is already Installed")
        }
    };

    return (
        <AppContext.Provider value={{ apps, installApps, installedApps, uninstall }}>
            {children}
        </AppContext.Provider>
    );
};