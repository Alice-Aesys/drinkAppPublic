
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowDrinks from '../../components/showDrinks';
import ShowDetail from '../../components/ShowDetail';

const Stack = createNativeStackNavigator()

const DrinkRoot = () => {

    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="Drinks" component={ShowDrinks} ></Stack.Screen>
                <Stack.Screen name="Detail" component={ShowDetail}></Stack.Screen>
            </Stack.Navigator>
    )
}

export default DrinkRoot;