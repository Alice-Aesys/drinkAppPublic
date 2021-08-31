import React from 'react';
import Welcome from '../../components/welcome';
import Drinks from '../../components/drinks'
import Profile from '../../components/profile'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import home from '../../utility/images/home.png'
import { Image } from 'react-native';
import drink from '../../utility/images/drink.png'
import search from '../../utility/images/search.png'

const Tab = createBottomTabNavigator();

const Home = ({ name,login }) => {
    const sloggati = ()=>{
                login(false)
    }
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName='welcome' >
                
            <Tab.Screen name="Search" component={Drinks} options={{
                    tabBarShowLabel: false,
                    tabBarStyle:{
                      backgroundColor: '#F7EFCA',
                      borderTopColor: '#F7EFCA',
                  },
                    tabBarIcon: () => (
                      <Image
                        source={search}
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                    ),
                  }}/>


                <Tab.Screen name="welcome" component={Welcome} initialParams={{nome: name, sloggati}}
                options={{
                    tabBarShowLabel: false,
                    tabBarStyle:{
                        backgroundColor: '#F7EFCA',
                        borderTopColor: '#F7EFCA',
                    },
                    tabBarIcon: () => (
                      <Image
                        source={home}
                        style={{
                          width: 29,
                          height: 29,
                        }}
                      />
                    ),
                  }}/>


                <Tab.Screen name="Profile" component={Profile} options={{
                    tabBarShowLabel: false,
                    tabBarStyle:{
                      backgroundColor: '#F7EFCA',
                      borderTopColor: '#F7EFCA',
                  },
                    tabBarIcon: () => (
                      <Image
                        source={drink}
                        style={{
                          width: 32,
                          height: 32,
                        }}
                      />
                    ),
                  }}/>
                   
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Home;

