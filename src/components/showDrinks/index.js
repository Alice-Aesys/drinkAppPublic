import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { randomDrinks } from '../../utility/api/api';
import logo from '../../utility/images/logo.png'
import SearchBar from '../searchBar';

const ShowDrinks = ({navigation}) => {
const [result, setResult] = useState([])
const [search, setSearch] = useState([])

useEffect(()=>{
    randomDrinks().then(res => setResult(res.data.drinks))
}, [])

let cerca = [];
function controlla (){
    if(search!==null){
        cerca.push(search)
    } else {
        cerca.push(result)
    }
}




    return (
        <ScrollView style={style.container}>
            <View style={style.justify}>
            <Image source={logo} style={style.logo}></Image>
            <Text style={style.title}>Cocktails</Text>
            <SearchBar val={setSearch}/>
            <View style={style.container_cards}>
                
                {controlla()}
                {cerca[0].map((elem, index) => {
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
    justify:{
        display: 'flex',
        alignItems:'center',
        marginTop: 20

    },
    logo: {
        width: 75,
        height: 75
    },
    title:{
        paddingTop: 10,
        color: '#cc3675',
        fontSize: 30,
        fontFamily: 'SNORTER PERSONAL USE',
        fontWeight: "normal"
    },
    container_cards:{
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

export default ShowDrinks;