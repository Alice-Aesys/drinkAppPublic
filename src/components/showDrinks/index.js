import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { randomDrinks } from '../../utility/api/api';
import logo from '../../utility/images/logo.png'
import SearchBar from '../searchBar';




const ShowDrinks = ({navigation}) => {
const [randomDrink, setrandomDrink] = useState([])
const [search, setSearch] = useState([])


useEffect(()=>{
    randomDrinks().then(res => setrandomDrink(res.data.drinks))
}, [])

let result = [];

function pushResult (){
    if(search!==null){
        result.push(search)
    } else {
        result.push(randomDrink)
    }
}

    return (
        <ScrollView style={style.container}>
            <View style={style.justify}>
            <Image source={logo} style={style.logo}></Image>
            <Text style={style.title}>Cocktails</Text>
            <View style={style.line} />
            <SearchBar val={setSearch}/>
            <View style={style.container_cards}>
                
                {pushResult()}
                {result[0].map((elem, index) => {
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
    line: {
        width: '70%',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(204, 54, 117, 0.2)',
        marginBottom: '7%',
        alignSelf: 'center'
    },
    container_cards:{
        marginTop:40,
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