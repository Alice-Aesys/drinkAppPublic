import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image, View, Button } from 'react-native'
import { drinkDetail } from '../../utility/api/api'
import BackArrow from '../../utility/images/back.png'
import Related from '../related'

function ShowDetail({ navigation, route }) {
    const { id } = route.params
    const [drink, setDrink] = useState([])

    let ingredients = []
    let quantity = []


    function makePush(val, array) {
        for (let i = 1; i <= 15; i++) {
            if (drink[val + i] !== null) {
                array.push(drink[val + i])
            }
        }
    }


    useEffect(() => {
        drinkDetail(id).then(res => setDrink(res.data.drinks[0]))
    },[id])



    return (
        <ScrollView style={style.container}>

            <View style={style.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={style.back}><Image source={BackArrow} style={style.backarrow}></Image></TouchableOpacity>
                <Text style={style.title}>{drink.strDrink}</Text>
            </View>


            <View style={style.container_detail}>
                <Image source={{ uri: drink.strDrinkThumb }} style={style.img} />
                <View style={style.container_txts}>
                    <Text style={style.alc}>{drink.strAlcoholic}</Text>
                    <Text style={style.glassType}>{drink.strGlass}</Text>
                </View>
            </View>

            <Text style={style.ingredients_title}>ingredients:</Text>
            <View style={style.ingredients_container}>
                <View style={style.ingr}>
                    <Text style={style.det}>Name</Text>
                {makePush('strIngredient', ingredients)}
                {(ingredients?.map((elem, index) => { return <Text key={index} style={style.ingredient}>{elem}</Text> }))}
                </View>
                <View style={style.quant}>
                    <Text style={style.det}>Quantity</Text>
                {makePush('strMeasure', quantity)}
                {(quantity?.map((elem, index) => { return <Text key={index} style={style.ingredient}>{elem}</Text> }))}
                </View>
            </View>
            
            <Text style={style.ingredients_title}>Instructions:</Text>
            <Text style={style.ingredient}>{drink.strInstructions}</Text>

        <View style={style.line}/>

        <Related name={drink.strIngredient1}></Related>
        </ScrollView>
    )

}
const style = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#F7EFCA',
        padding: 10
    },
    header: {
        display: 'flex',
        flexDirection: 'row'
    },
    back: {
        width: '10%'
    },
    title: {
        color: '#cc3675',
        fontSize: 40,
        fontFamily: 'SNORTER PERSONAL USE',
        fontWeight: "normal",
        textAlign: 'center',
        width: '90%'
    },
    backarrow: {
        width: 30,
        height: 30,
        marginTop: 12
    },
    container_detail: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10
    },
    img: {
        width: 120,
        height: 170
    },
    container_txts: {
        marginLeft: 10,
    },
    alc: {
        fontFamily: 'Ignotum',
        fontSize: 20,
        marginBottom: 5,
    },
    glassType: {
        fontFamily: 'Ignotum',
        fontSize: 20
    },
    ingredients_title:{
        color: '#cc3675',
        fontSize: 30,
        fontFamily: 'SNORTER PERSONAL USE',
        fontWeight: "normal",
        marginBottom: 5
    },
    ingredients_container:{
        display: 'flex',
        flexDirection:'row',
        marginBottom: 5
    },
    ingr:{
        marginRight: 10
    },
    det:{
        color: '#cc3675',
        fontSize: 25,
        fontFamily: 'SNORTER PERSONAL USE',
        fontWeight: "normal",
    },
    ingredient:{
        fontFamily: 'Ignotum',
        fontSize: 18
    },
    line: {
        width: '70%',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(204, 54, 117, 0.2)',
        alignSelf: 'center'
    },

    




})
export default ShowDetail;
