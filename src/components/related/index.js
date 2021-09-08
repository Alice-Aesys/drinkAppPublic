import React, { useEffect, useState } from 'react'
import { searchByIngredient } from '../../utility/api/api'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useRef } from 'react';
import ContainerCard from '../../utility/component/containerCard';

const Related = ({ name }) => {
    const [drinks, setDrinks] = useState([])
    const refs = useRef();

    useEffect(() => {
        searchByIngredient(name).then(res => res.data !== "" ? setDrinks(res.data.drinks) : null)
    }, [name])

    return (
        <ScrollView ref={refs} >
            <Text style={style.title}>Related to {name}</Text>
            <View style={style.container}>
                {drinks.map((elem) => {
                    return <ContainerCard elem={elem} />
                })}
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    title: {
        marginTop: 10,
        color: '#cc3675',
        fontSize: 40,
        fontFamily: 'SNORTER PERSONAL USE',
        fontWeight: "normal",
        alignSelf: 'center',
        textAlign: 'center'
    },
    container:{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    }

})
export default Related;
