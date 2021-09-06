import React, { useEffect, useState } from 'react'
import { searchByIngredient } from '../../utility/api/api'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';


const Related = ({name}) => {
    const [drinks, setDrinks] = useState([])
    const navigation = useNavigation();

    useEffect(()=>{
        searchByIngredient(name).then(res=>res.data!==""?setDrinks(res.data.drinks):null)
    },[name])
    
    return (
        <ScrollView>
            <Text style={style.title}>Related to {name}</Text>
        <View style={style.container}>
             {drinks.map((elem, index) => {
                    return (
                        <View key={index} style={style.single_card}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Detail', {id:elem.idDrink})}>
                            <Image source={{uri: elem.strDrinkThumb}} style={style.img}></Image>
                            <Text style={style.txt} ellipsizeMode='tail' numberOfLines={2}>{elem.strDrink}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
        </View>
        </ScrollView>
    )
}

const style = StyleSheet.create ({
    title:{
        marginTop: 10,
        color: '#cc3675',
        fontSize: 40,
        fontFamily: 'SNORTER PERSONAL USE',
        fontWeight: "normal",
        alignSelf:'center',
        textAlign: 'center'
    },
    container:{
        marginTop:20,
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent: 'space-around'
    },
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
export default Related;