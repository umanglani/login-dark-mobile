import { View, StyleSheet, Text, TextInput, Image, Button, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import Header from '../common/header';
import { buttonStyles, Colors, globalStyles, loginStyles } from '../global-styles';
import { useHeaderHeight } from '@react-navigation/elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Signup = props => {

    const headerHeight = useHeaderHeight();

    return (
            
        <KeyboardAwareScrollView style={{backgroundColor: Colors.MainBackground}}>
        <View style={[styles.loginContainer, globalStyles.dark]}>

            <Header/>

            <View style={[globalStyles.fullWidth, globalStyles.flex7]}>

                <View style={[styles.loginHeader, globalStyles.fullWidth]}>
                    <Text style={[globalStyles.bigTitle]}>Sign-up</Text>
                </View>

                <View style={[globalStyles.fullWidth]}>
                    
                    <View style={styles.loginInputItem}>
                        <Text style={[globalStyles.mediumTitle, loginStyles.label]}>Name</Text>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                        <TextInput style={[loginStyles.input, globalStyles.gray]} placeholder='Your full name' placeholderTextColor={Colors.MidGray}></TextInput>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.loginInputItem}>
                        <Text style={[globalStyles.mediumTitle, loginStyles.label]}>Email</Text>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                        <TextInput style={[loginStyles.input, globalStyles.gray]} placeholder='Your email id' placeholderTextColor={Colors.MidGray}></TextInput>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={styles.loginInputItem}>
                        <Text style={[globalStyles.mediumTitle, loginStyles.label]}>Contact</Text>
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                        <TextInput keyboardType='numeric' style={[loginStyles.input, globalStyles.gray]} placeholder='Your contact number' maxLength={10} placeholderTextColor={Colors.MidGray}></TextInput>
                        </TouchableWithoutFeedback>
                    </View>


                    <View style={styles.loginInputItem}>
                        <Text style={[globalStyles.mediumTitle, loginStyles.label]}>Password</Text>
                        <TextInput style={[loginStyles.input, globalStyles.gray]} placeholder='Password' secureTextEntry placeholderTextColor={Colors.MidGray}></TextInput>
                    </View>

                    <View style={styles.loginInputItem}>
                        <Text style={[globalStyles.mediumTitle, loginStyles.label]}>Confirm Password</Text>
                        <TextInput style={[loginStyles.input, globalStyles.gray]} placeholder='Password' secureTextEntry placeholderTextColor={Colors.MidGray}></TextInput>
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
        </KeyboardAwareScrollView>
    )
}

export default Signup;

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
        paddingTop: 30,
        paddingBottom: 30
    },
    loginInputItem: {
        paddingTop: 10,
        paddingBottom: 10
    },
    loginButtons: {
        paddingTop: 15
    }
});
