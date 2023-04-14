import { View, StyleSheet, Text, TextInput, Image, Button, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../common/header';
import { buttonStyles, Colors, globalStyles, loginStyles } from '../global-styles';
import { useState } from 'react';

const Login = props => {

    const gotoForgotPassword = () => {
        props.navigation.navigate('forgotpassword');
    }

    const gotoSignup = () => {
        props.navigation.navigate('signup');
    }

    const [loginProgress, setLoginProgress] = useState(false);

    const login = () => {
        setLoginProgress(true);
        setTimeout(() => {
            setLoginProgress(false);
            props.navigation.navigate('home');
        }, 2000);
    }

    return (
        <View style={[styles.loginContainer, globalStyles.dark]}>

            <Header nav={props.navigation}/>

            <View style={[globalStyles.fullWidth, globalStyles.flex5]}>

                <View style={[styles.loginHeader, globalStyles.fullWidth]}>
                    <Text style={[globalStyles.bigTitle]}>Login</Text>
                </View>

                <View style={[globalStyles.fullWidth]}>
                    <View style={styles.loginInputItem}>
                        <Text style={[globalStyles.mediumTitle, loginStyles.label]}>Username or Email</Text>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                        <TextInput style={[loginStyles.input, globalStyles.gray]} placeholder='Your username or email id' placeholderTextColor={Colors.MidGray}></TextInput>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.loginInputItem}>
                        <Text style={[globalStyles.mediumTitle, loginStyles.label]}>Password</Text>
                        <TextInput style={[loginStyles.input, globalStyles.gray]} placeholder='Password' secureTextEntry placeholderTextColor={Colors.MidGray}></TextInput>
                        <TouchableOpacity onPress={gotoForgotPassword}>
                            <Text style={[globalStyles.white, styles.forgotPwdLink]}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={[styles.loginButtons, globalStyles.fullWidth]}>
                    {!loginProgress && <TouchableOpacity onPress={login}>
                        <View style={buttonStyles.darkButton}>
                        <Text style={[globalStyles.regularTitle]}>Login</Text>
                        </View>
                    </TouchableOpacity>}

                    {loginProgress && <View style={buttonStyles.darkButton}>
                        <Image source={require('../../assets/loading.gif')} style={styles.loadingImage}></Image>
                        </View>}
                </View>

            </View>

            <View style={[styles.loginFooter, globalStyles.fullWidth, globalStyles.vCenter, globalStyles.flex2]}>
                <Text style={[globalStyles.regularText]}>Don't have an account yet?
                    <TouchableOpacity onPress={gotoSignup}>
                        <Text style={[styles.forgotPwdLink, globalStyles.regularText]}> Sign up!</Text>
                    </TouchableOpacity>
                </Text>

                <View style={[styles.loginWith, globalStyles.fullWidth]}>
                    <Text style={[globalStyles.regularText, styles.signupText]}>
                        Or login with
                    </Text>
                </View>

                <View style={[globalStyles.flexCenter, globalStyles.flexRow, styles.signupOptions]}>
                    <Image style={styles.signupIcon} source={require("../../assets/icon-google.png")}></Image>
                    <Image style={styles.signupIcon} source={require("../../assets/icon-fb.png")}></Image>
                    <Image style={styles.signupIcon} source={require("../../assets/icon-apple.png")}></Image>
                </View>

            </View>
    
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    loginContainer: {
      paddingTop: 25,
      paddingLeft: 25,
      paddingRight: 25,
      paddingBottom: 15,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      fontFamily: 'Nunito_400Regular',
      flex: 1
    },
    loginHeader: {
        marginTop: 30,
        marginBottom: 30
    },
    loginFooter: {
        marginTop: 0
    },
    loginInputItem: {
        paddingTop: 10,
        paddingBottom: 10
    },
    forgotPwdLink: {
        paddingTop: 10,
        textAlign: 'right'
    },
    loginWith: {
        marginTop: 40,
        borderBottomColor: Colors.Gray,
        borderBottomWidth: 1,
        position: 'relative'
    },
    signupText: {
        position: 'absolute',
        top: -10,
        left: '34%',
        backgroundColor: Colors.MainBackground,
        paddingLeft: 10,
        paddingRight: 10
    },
    signupOptions: {
        paddingTop: 25
    },
    signupIcon: {
        height: 26,
        width: 26,
        color: Colors.MainForeColor,
        marginRight: 12
    },
    loadingImage: {
        height: 20,
        width: 60,
    }
});
