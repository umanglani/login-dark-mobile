import { Image, StyleSheet, Text, View } from 'react-native';
import { useFonts, Nunito_300Light, Nunito_300Light_Italic, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { Righteous_400Regular } from '@expo-google-fonts/righteous';
import { Colors } from './src/global-styles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/login/login';
import ForgotPassword from './src/login/forgotpassword';
import Signup from './src/login/signup';
import Home from './src/home/homepage';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_300Light, Nunito_300Light_Italic, Nunito_400Regular, Nunito_700Bold, Righteous_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}}>
    <NavigationContainer >
    {/* screenOptions={{ headerShown: false, headerMode: 'none' }} */}
      <Stack.Navigator>
        <Stack.Screen name="login" component={Login} options={{ title: '',
          headerShadowVisible: false, headerStyle: styles.navHeaderStyle}}/>
        <Stack.Screen name="forgotpassword" component={ForgotPassword} 
          options={{ title: '', headerShadowVisible: false,
          headerStyle: styles.navHeaderStyle, headerTintColor: '#fff'}}
          />
        <Stack.Screen name="signup" component={Signup} options={{ title: '',
          headerShadowVisible: false, headerStyle: styles.navHeaderStyle, headerTintColor: '#fff'}}/>

        <Stack.Screen name="home" component={Home} options={{ title: '',
          headerShadowVisible: false, headerStyle: styles.navHeaderStyle, headerTintColor: '#fff'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontFamily: 'Nunito_400Regular',
    backgroundColor: Colors.MainBackground,
  },
  bodyWrapper: {
  },
  contentContainer: {
      flex: 1,
      width: '100%'
  },
  navHeaderStyle: { 
    backgroundColor: Colors.MainBackground,
    height: 40,
    borderBottomWidth: 0,
    borderBottomColor: Colors.MainBackground
  }
});
