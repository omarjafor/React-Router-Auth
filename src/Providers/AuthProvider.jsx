import { createContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = () => {
    const authInfo = {name: 'Nodi Sagor Kala'}
    return (
        <AuthContext.Provider value={authInfo}>
            
        </AuthContext.Provider>
    );
};

export default AuthProvider;