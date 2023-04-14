import { View, StyleSheet, Text, TextInput, Image, Button, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../common/header';
import { buttonStyles, Colors, globalStyles, loginStyles } from '../global-styles';

const ForgotPassword = props => {

    const gotoLogin = () => {
        props.navigation.navigate('login');
    }

    return (
        <View style={[styles.loginContainer, globalStyles.dark]}>

            <Header/>

            <View style={[globalStyles.fullWidth, globalStyles.flex7]}>

                <View style={[styles.loginHeader, globalStyles.fullWidth]}>
                    <Text style={[globalStyles.bigTitle]}>Forgot Password</Text>
                </View>

                <View style={[globalStyles.fullWidth]}>
                    <View style={styles.loginInputItem}>
                        <Text style={[globalStyles.mediumTitle, loginStyles.label]}>Regsitered Email</Text>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                        <TextInput style={[loginStyles.input, globalStyles.gray]} placeholder='Your registered email id' placeholderTextColor={Colors.MidGray}></TextInput>
                        </TouchableWithoutFeedback>
                    </View>
                </View>

                <View style={[styles.loginButtons, globalStyles.fullWidth]}>
                    <TouchableOpacity>
                        <View style={buttonStyles.darkButton}>
                            <Text style={[globalStyles.regularTitle]}>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}

export default ForgotPassword;

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
    loginInputItem: {
        marginTop: 15,
        marginBottom: 15
    },
});
