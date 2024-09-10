import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Logo from "../assets/logo.png";
import LeftTopSplashIcon from "../assets/leftSplashIcon.png";
import RightTopSplashIcon from "../assets/rightSplashIcon.png";

const LetsStartScreen = ({ navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Image source={LeftTopSplashIcon} style={styles.topContainerImage} />
                    <Image source={RightTopSplashIcon} style={styles.topContainerImage} />
                </View>
                <View style={styles.middeleContainer}>
                    <Image source={Logo} style={styles.middeleContainerImage} />
                </View>
                <View style={styles.secondMiddleContainer}>
                    <Text style={styles.secondMiddleContainerText}>Sparkle & Shine  Transform </Text>
                    <Text style={styles.secondMiddleContainerText}>Your Drive with Every Wash!</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <View>
                        <TouchableOpacity style={styles.bottomContainerBtn} onPress={() => { navigation.navigate('SignUpScreen') }}>
                            <Text style={styles.bottomContainerBtnText}>Let's Start</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bottomContainerSignInDiv}>
                        <Text>Already have an account? </Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('SignInScreen') }}>
                            <Text style={styles.bottomContainerSignInText}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
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
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    topContainerImage: {
        width: 150,
        height: 150,
    },
    middeleContainer: {
        width: '100%',
    },
    middeleContainerImage: {
        width: 400,
        height: 300,
    },
    secondMiddleContainer: {
        width: '100%',
    },
    secondMiddleContainerText: {
        color: '#808080',
        fontSize: 20,
    },
    bottomContainer: {
        width: '100%',
        paddingBottom: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomContainerBtn: {
        width: 350,
        height: 50,
        backgroundColor: '#94C7FF',
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainerBtnText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    bottomContainerSignInDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
    },
    bottomContainerSignInText: {
        color: '#000',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

export default LetsStartScreen
