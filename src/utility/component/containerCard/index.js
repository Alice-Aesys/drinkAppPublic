import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet } from 'react-native';


const ContainerCard = ({elem}) => {
const navigation=useNavigation()

    return (
                <View style={style.single_card}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Detail', {id:elem.idDrink})}>
                    <Image source={{uri: elem.strDrinkThumb}} style={style.img}></Image>
                    <Text style={style.txt} ellipsizeMode='tail' numberOfLines={2}>{elem.strDrink}</Text>
                    </TouchableOpacity>
                </View>
            )
}

const style = StyleSheet.create({
    single_card:{
        width:'30%',
        backgroundColor: 'rgba(204, 54, 117, 0.15)',
        display:'flex',
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        elevation: 1.5,
    },
    img:{
        width:80,
        height:100,
        marginTop: 5,
        marginBottom:7,
        borderRadius: 7
    },
    txt:{
        width: 80,
        fontSize: 15,
        fontFamily: 'Ignotum'
    }
})

export default ContainerCard;


