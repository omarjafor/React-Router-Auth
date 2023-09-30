import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    return (
        <div>
            <h1 className="text-2xl font-bold">This is Home</h1>
            <h1 className="text-2xl font-bold">{authInfo.name}</h1>
        </div>
    );
};

export default Home;