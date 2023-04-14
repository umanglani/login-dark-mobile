import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors, globalStyles } from '../global-styles';

const Header = props => {

  return (
    <View style={[styles.container, globalStyles.dark, globalStyles.fullWidth, globalStyles.flex1, globalStyles.relative]}>

          <Text style={[globalStyles.white, globalStyles.mediumTitle]}>Welcome to</Text>
          <Text style={styles.companyName}>WorkFlex</Text>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Nunito_400Regular',
    borderBottomWidth: 1,
    borderBottomColor: Colors.Gray,
    paddingBottom: 15
  },
  companyName: {
    fontFamily: 'Righteous_400Regular',
    fontSize: 50,
    color: Colors.MainForeColor
  },
  backButton: {
    position: 'absolute',
    color: Colors.MainForeColor,
    top: 0,
    left: 0
  }
});
