import {useEffect} from "react";
import {auth} from 'src/service/firestore/index.ts';
import {onAuthStateChange} from "firebase/auth";

const MyAccount = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children}) {
    const [currentUser, setUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    })

    async function initializeUser(user) {
        if (user) {
            setCurrentUSer({...user});
            setUserLoggedIn(true);
        } else {
            setCurrentUSer(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const falue = {
        currentUser,
        userLoggedIn,
        loading,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
