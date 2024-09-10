import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = ({ route, navigation }) => {
    const { name } = route.params;
    const userData = new AsyncStorage.getItem('user');
    // const user = JSON.parse(userData);
    const user = { name: 'Rishabh' };
    console.log(user);

    const handleLogout = async () => {
        await AsyncStorage.removeItem('user');
        navigation.navigate('SignInScreen');
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Welcome {name ?? user?.name}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => handleLogout()}>
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonContainer: {
        paddingTop: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: 350,
        height: 50,
        backgroundColor: '#94C7FF',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
})

export default WelcomeScreen
