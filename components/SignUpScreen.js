import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Logo from "../assets/logo.png";
import Line from "../assets/line.png";
import GoogleIcon from "../assets/googleIcon.png";
import AppleIcon from "../assets/appleIcon.png";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../store/authUserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from 'react-native-checkbox';

const SignUpScreen = ({ navigation }) => {
    const [nameData, setNameData] = useState();
    const [emailData, setEmailData] = useState();
    const [passwordData, setPasswordData] = useState();
    const [nameError, setNameError] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const authCtx = useContext(AuthContext);
    const [isChecked, setIsChecked] = useState(false);

    const handleSignUp = async () => {
        if (!nameData) {
            setNameError('Name is required');
        } else {
            setNameError('');
        }

        if (!emailData) {
            setEmailError('Phone is required');
        } else {
            setEmailError('');
        }

        if (!passwordData) {
            setPasswordError('Name is required');
        } else {
            setPasswordError('');
        }

        if (emailData && passwordData && nameData) {
            const response = await fetch('https://tor.appdevelopers.mobi/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phone: emailData,
                    password: passwordData,
                    name: nameData
                })
            })
            const data = await response.json();
            await AsyncStorage.setItem('user', JSON.stringify(data?.data));
            authCtx.authenticate(data?.data);
            console.log(data);
            navigation.navigate('WelcomeScreen', { name: data?.data?.name });
        }
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logo} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.mainText}>Sign Up</Text>
                    <Text style={styles.subText}>Fill in the below form and add life to</Text>
                    <Text style={styles.subText}>your car!</Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.inputView}>
                        <View>
                            <Text>Name</Text>
                            <TextInput placeholder="Name" style={styles.input} onChangeText={(text) => setNameData(text)} />
                            {nameError && <Text style={styles.errorText}>{nameError}</Text>}
                        </View>
                    </View>
                    <View style={styles.inputView}>
                        <View>
                            <Text>Phone</Text>
                            <TextInput placeholder="Phone" style={styles.input} onChangeText={(text) => setEmailData(text)} />
                            {emailError && <Text style={styles.errorText}>{emailError}</Text>}
                        </View>
                    </View>
                    <View style={styles.inputView}>
                        <View>
                            <Text>Password</Text>
                            <TextInput placeholder="Password" style={styles.input} onChangeText={(text) => setPasswordData(text)} />
                            {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
                        </View>
                    </View>
                </View>
                <View style={styles.agreeContainer}>
                    <CheckBox
                        label=""
                        checked={isChecked}
                        onChange={(checked) => setIsChecked(!isChecked)}
                    />
                    <Text>Agree with</Text>
                    <TouchableOpacity>
                        <Text style={styles.termsText}>Terms & Conditions</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => handleSignUp()}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.orContainer}>
                    <Image source={Line} style={styles.line} />
                    <Text style={styles.orText}>or</Text>
                    <Image source={Line} style={styles.line} />
                </View>
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={GoogleIcon} style={styles.socialButtonImage} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={AppleIcon} style={styles.socialButtonImage} />
                    </TouchableOpacity>
                </View>
                <View style={styles.signInContainer}>
                    <Text style={styles.dontHaveText}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                        <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.termsContainer}>
                    <Text>By signing in, you agree to our terms of use and</Text>
                    <Text>privacy policy</Text>
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
        padding: 20,
    },
    logo: {
        width: 200,
        height: 150,
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'left',
        width: 380,
    },
    mainText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 16,
        color: '#808080',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        paddingTop: 20,
    },
    inputView: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    input: {
        paddingHorizontal: 10,
        borderColor: '#808080',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        fontSize: 16,
        width: 380,
        height: 40,
    },
    agreeContainer: {
        width: 380,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 150,
    },
    termsText: {
        textDecorationLine: 'underline'
    },
    buttonContainer: {
        paddingTop: 10,
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
    orContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
    },
    line: {
        width: 100,
        height: 1,
        backgroundColor: '#F2F2F2',
    },
    orText: {
        color: '#808080',
        fontSize: 16,
    },
    socialContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 130,
        paddingRight: 130,
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialButtonImage: {
        width: 50,
        height: 50,
    },
    signInContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dontHaveText: {
        color: '#000',
        fontSize: 14,
    },
    signInText: {
        color: '#000',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    termsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        color: '#808080',
        fontSize: 14,
    },
    errorText: {
        color: 'red',
    }
})

export default SignUpScreen
