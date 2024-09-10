import { createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
    authenticate: () => { },
    logout: () => { },
});

function AuthContextProvider({ children }) {
    const authenticate = async data => {
        console.log(data);
        await AsyncStorage.setItem('user', JSON.stringify(data));
    };

    const logout = async () => {
        await AsyncStorage.removeItem('user');
    }

    const value = useMemo(() => ({
        authenticate: authenticate,
        logout: logout
    }), []);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;