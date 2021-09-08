import React  from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { randomDrinks } from '../../utility/api/api';
import ContainerCard from '../../utility/component/containerCard';
import Line from '../../utility/component/line';
import Title from '../../utility/component/title';
import SearchBar from '../searchBar';


const ShowDrinks = () => {
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
            <Title text={'cocktails'}/>
            <Line/>
            <SearchBar val={setSearch}/>
            <View style={style.container_cards}>
                
                {pushResult()}
                {result[0].map((elem) => {
                    return (
                        <ContainerCard elem={elem}/>

                    )})}
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
    }
    
})

export default ShowDrinks;
