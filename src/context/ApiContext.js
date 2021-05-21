import React from "react";

const APIContext = React.createContext();


const ApiProvider = ({ children }) => {
    const [signUpEmail,setSignUpEmail] = React.useState("")
    const value = {setSignUpEmail,signUpEmail};
    return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
};

export const useApi = () => React.useContext(APIContext);
export default ApiProvider;
