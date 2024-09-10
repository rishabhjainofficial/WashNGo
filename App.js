import { View, StyleSheet } from 'react-native';
import SplashScreen from './components/SplashScreen';
import LetsStartScreen from './components/LetsStartScreen';
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import WelcomeScreen from './components/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';

export default function App() {
  const Stack = createStackNavigator();

  const FirstScreen = ({ navigation }) => {
    useEffect(() => {
      // Navigate to SecondScreen after 3 seconds
      const timer = setTimeout(() => {
        navigation.navigate('LetsStartScreen');
      }, 3000);

      // Clean up the timer if the component is unmounted
      return () => clearTimeout(timer);
    }, [navigation]);

    return (
      <SplashScreen />
    );
  };

  const Navigation = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={FirstScreen} />
          <Stack.Screen name="LetsStartScreen" component={LetsStartScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
