import React from "react";
import { StyleSheet, View } from "react-native";


const Line = () => {

    return (
        <View style={style.line} />
    )

}

const style = StyleSheet.create({
    line: {
        width: '70%',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(204, 54, 117, 0.2)',
        alignSelf: 'center'
    }
})

export default Line