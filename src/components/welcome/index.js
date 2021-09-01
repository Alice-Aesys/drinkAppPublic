import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import logo from '../../utility/images/logo.png'
import logout from '../../utility/images/logout.png'
const Welcome = ({ route }) => {
    const { nome, sloggati } = route.params
    return (
        <ScrollView style={style.container}>

            <View style={style.container_logo_welcome}>
                <Image source={logo} style={style.img} />
                <Text style={style.welcome}>Welcome {nome} </Text>
            </View>

            <View style={style.line} />

            <TouchableOpacity style={style.logout_container} onPress={() => sloggati()}>
                <Image source={logout} style={style.logout_css} /></TouchableOpacity>

            <View style={style.container_info}>
                <Text style={style.welcome}>Chi siamo</Text>
                <Text style={style.txt}> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </Text>
            </View>

        </ScrollView>
    )
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#F7EFCA',

    },
    container_logo_welcome: {
        position: 'relative',
        alignItems: 'center',
        paddingTop: 20,
    },
    img: {
        width: 75,
        height: 75
    },
    welcome: {
        marginTop: 10,
        color: '#cc3675',
        fontSize: 30,
        fontFamily: 'SNORTER PERSONAL USE',
        fontWeight: "normal"
    },
    logout_css: {
        width: 28,
        height: 28,
        marginLeft: 5,
        opacity: 0.65
    },
    logout_container: {
        position: 'absolute',
        left: 330,
        top: 16
    },
    line: {
        width: '70%',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(204, 54, 117, 0.2)',
        marginBottom: '10%',
        alignSelf: 'center'
    },
    container_info: {
        display: 'flex',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom:'10%',
        backgroundColor: 'pink',
        borderRadius:5,
        alignItems: 'center',
        shadowColor: "#000",
        elevation: 14,
    },
    txt: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 19,
        fontFamily: 'SNORTER PERSONAL USE',
        marginBottom: 10
    }
})
export default Welcome;