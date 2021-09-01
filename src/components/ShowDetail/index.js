import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import { drinkDetail } from '../../utility/api/api'

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
        drinkDetail(id).then(res => setDrink(res.data.drinks[0])).then()
    }, [])

    return (
        <ScrollView style={style.container}>
            <View style={style.container_header}>
                <Image source={{ uri: drink.strDrinkThumb }} style={style.img} />
                <View style={style.container_txts}>
                    <Text style={style.title}>{drink.strDrink}</Text>
                    <Text style={style.alc}>{drink.strAlcoholic}</Text>
                    <Text style={style.glassType}>{drink.strGlass}</Text>
                </View>
            </View>
            <Text style={style.ingredients_title}>Ingredienti</Text>
            {makePush('strIngredient', ingredients)}
            {(ingredients?.map((elem, index) => { return <Text style={style.ingredient}>{elem}</Text> }))}
            {makePush('strMeasure', quantity)}
            {(quantity?.map((elem, index) => { return <Text style={style.quantity}>{elem}</Text> }))}

        </ScrollView>
    )

}
const style = StyleSheet.create({

    container_header: {
        display: 'flex',
        flexDirection: 'row'
    },
    img: {
        width: 100,
        height: 100
    }


})
export default ShowDetail;