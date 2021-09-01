import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
function Ciao2 ({navigation}) {

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}><Text> torna in home </Text></TouchableOpacity>
            
        </View>
    )

}

export default Ciao2;