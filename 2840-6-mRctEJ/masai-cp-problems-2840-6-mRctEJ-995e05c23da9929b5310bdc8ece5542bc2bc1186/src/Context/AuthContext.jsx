import React,{createContext, useState} from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth]= useState(false);
    const [token, setToken] = useState(null);

    const login =async(email, password)=> {
        try{
            const response = await fetch('https://reqres.in/api/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password }),
            })

            const data =await response.json();

            if (response.ok){
                setIsAuth(true);
                setToken(data.token);
            }
            else{
                throw new Error(data.error)
            }
        }
        catch(error){
            console.error('Login error:', error.message)
        }
    };
    const logout =()=>{
        setIsAuth(false);
        setToken(null);
    };
    return(
        <AuthContext.Provider value={{isAuth, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

