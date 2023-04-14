import { StyleSheet } from 'react-native';

export const Colors = {
    MainBackground: '#262b31',
    BorderColor: '#a0a1a4',
    ButtonBackgroundColor: '#151a1d',
    Gray: '#afafaf',
    LightGray: '#e1e1e1',
    MidGray: '#a3a6ab',
    MainForeColor: '#fff'
};

export const globalStyles = StyleSheet.create({
    flexStart: {
        justifyContent: 'flex-start',
    },
    flexCenter: {
        justifyContent: 'center',
    },
    flexEnd: {
        alignItems: 'flex-end',
    },
    vCenter: {
        alignItems: 'center'
    },
    flexRow: {
        flexDirection: 'row'
    },
    fullWidth: {
        width: '100%'
    },
    lightSmallText: {
        fontSize: 12,
        fontFamily: 'Nunito_300Light',
        color: Colors.MainForeColor
    },
    lightText: {
        fontSize: 13,
        fontFamily: 'Nunito_300Light',
        color: Colors.MainForeColor
    },
    bigTitle: {
        fontSize: 32,
        fontFamily: 'Nunito_700Bold',
        color: Colors.MainForeColor
    },
    mediumTitle: {
        fontSize: 18,
        fontFamily: 'Nunito_700Bold',
        color: Colors.MainForeColor
    },
    regularTitle: {
        fontSize: 16,
        fontFamily: 'Nunito_700Bold',
        color: Colors.MainForeColor
    },
    regularText: {
        fontSize: 15,
        fontFamily: 'Nunito_400Regular',
        color: Colors.MainForeColor
    },
    bold: {
        fontWeight: 700
    },
    gray: {
        color: Colors.Gray
    },
    white: {
        color: Colors.MainForeColor
    },
    icon: {
        fontSize: 17
    },
    padding15: {
        padding: 15
    },
    separator: {
        height: 1,
        backgroundColor: Colors.BorderColor,
        marginVertical: 5
    },
    dark: {
        backgroundColor: Colors.MainBackground,
    },
    flex1: {
        flex: 1
    },
    flex2: {
        flex: 2
    },
    flex3: {
        flex: 3
    },
    flex4: {
        flex: 4
    },
    flex5: {
        flex: 5
    },
    flex6: {
        flex: 6
    },
    flex7: {
        flex: 7
    },
    relative: {
        position: 'relative'
    }
});

export const loginStyles = StyleSheet.create({
    label: {
        marginBottom: 10
    },
    input: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.Gray,
        outlineStyle: 'none',
        fontFamily: 'Nunito_400Regular'
    }
});

export const buttonStyles = StyleSheet.create({
    darkButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        color: Colors.MainForeColor,
        backgroundColor: 'black',
        borderRadius: 50,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 8,
        paddingRight: 8
    }
});