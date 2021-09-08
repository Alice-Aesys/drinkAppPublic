import React from 'react'
import logo from '../../images/logo.png'
import { StyleSheet, View, Image, Text } from 'react-native'
const Title = ({ text }) => {

    return (
        <View style={style.container_logo_welcome}>
            <Image source={logo} style={style.img} />
            <Text style={style.welcome}>{text}</Text>
        </View>
    )

}

const style = StyleSheet.create({
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
})

export default Title