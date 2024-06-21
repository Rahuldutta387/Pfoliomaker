import { React, useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const details = {
      name: "Rahul Dutta",
      role: "Full Stack Developer",
      description : "A resume summary highlights your key achievements, skills, and experience. A resume objective outlines your career goals. In other words, a resume objective is more about what you're looking for in your career."
    };
    
    const [userData, setUserData] = useState(()=>{
        const savedState = localStorage.getItem('myState');
        return savedState ? JSON.parse(savedState) : details;
    })

    useEffect(()=>{
        localStorage.setItem('myState',JSON.stringify(userData));
    },[userData]);

    return (
        <UserContext.Provider value = {[userData, setUserData]}>
            {children}
        </UserContext.Provider>
    )
}
