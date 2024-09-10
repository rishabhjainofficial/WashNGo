import { View, Image, StyleSheet } from "react-native";
import Logo from "../assets/logo.png";
import LeftTopSplashIcon from "../assets/leftSplashIcon.png";
import RightTopSplashIcon from "../assets/rightSplashIcon.png";
import RightBottomSplashIcon from "../assets/rightBottomSplashIcon.png";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Image source={LeftTopSplashIcon} style={styles.topContainerImage} />
                <Image source={RightTopSplashIcon} style={styles.topContainerImage} />
            </View>
            <View style={styles.middeleContainer}>
                <Image source={Logo} style={styles.middeleContainerImage} />
            </View>
            <View style={styles.bottomContainer}>
                <Image source={RightBottomSplashIcon} style={styles.bottomContainerImage} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#fff',
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
    bottomContainer: {
        width: '100%',
    },
    bottomContainerImage: {
        width: 250,
        height: 250,
        alignSelf: 'flex-end',
    }
});

export default SplashScreen
