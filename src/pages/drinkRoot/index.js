
import React from 'react';
import Ciao from '../../components/showDrinks';
import Drinks from '../../components/drinks';
import Ciao2 from '../../components/ciao2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShowDrinks from '../../components/showDrinks';

const Stack = createNativeStackNavigator()
const DrinkRoot = () => {

    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="ciao" component={ShowDrinks}></Stack.Screen>
                <Stack.Screen name="ciao2" component={Ciao2}></Stack.Screen>
            </Stack.Navigator>
    )
}

export default DrinkRoot;