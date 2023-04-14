import { View, StyleSheet, Text, TextInput, Image, Button, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from '../common/header';
import { buttonStyles, Colors, globalStyles } from '../global-styles';

const Home = props => {

    return (
        <View style={[styles.loginContainer, globalStyles.dark]}>
            <Header/>
            <View style={[globalStyles.fullWidth, globalStyles.vCenter, globalStyles.flex7]}>
                <Text style={[globalStyles.mediumTitle, styles.loginText]}>
                Login Success!</Text>
            </View>
        </View>
    )
}

export default Home;

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
    loginText: {
        paddingTop: 100
    }
});
