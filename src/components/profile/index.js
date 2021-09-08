import React, { useContext, useEffect, useState, } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import logo from '../../utility/images/logo.png'
import logout from '../../utility/images/logout.png'
import {GlobalContext} from '../../pages/home'
import { useNavigation } from '@react-navigation/native';

let optionsDo = {
    saveToPhotos: true,
    mediaType: 'photo',
    includeBase64: false,
}

let optionsChoose = {
    maxHeight: 2000,
    maxWidth: 2000,
    selectionLimit: 0,
    mediaType: 'photo',
    includeBase64: false,
}


const Profile = ({ route }) => {
    const navigation = useNavigation()
    const {add} = useContext(GlobalContext)
    const { nome, sloggati } = route.params
    const [photo, setPhoto] = useState([])
    let uriImg = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RandomBitmap.png'

    

    if (photo.length !== 0 && photo.didCancel !== true) {
        uriImg = photo.assets[0].uri
    } else {
        uriImg = 'https://upload.wikimedia.org/wikipedia/commons/e/ec/RandomBitmap.png'
    }

    return (
        <ScrollView style={style.container}>
            <View style={style.wrappons}>

            <View style={style.justify}>
                <Image source={logo} style={style.logo}></Image>
                <Text style={style.title}>{nome}</Text>
            </View>

            <View style={style.line} />

            <TouchableOpacity style={style.logout_container} onPress={() => sloggati()}>
                <Image source={logout} style={style.logout_css} /></TouchableOpacity>

            <View style={style.wrapper}>
                <Image source={{ uri: uriImg }} style={style.profileImg}></Image>
                <View style={style.buttons}>
                    <TouchableOpacity onPress={() => launchCamera(optionsDo, setPhoto)} style={style.single_button}><Text style={style.button_text}>Take Photo</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => launchImageLibrary(optionsChoose, setPhoto)} style={style.single_button}><Text style={style.button_text}>Choose Photo</Text></TouchableOpacity>
                </View>
            </View>

            <View style={style.line} />

            <View style={style.wrapper_fav}>
                <Text style={style.title}>Your Favorites:</Text>
                <View style={style.container_cards}>
                
                {add.map((elem, index) => {
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
    wrappons:{
        marginLeft: 10,
        marginRight: 10
    },
    justify: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
    },
    logo: {
        width: 75,
        height: 75,
    },
    title: {
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
        alignSelf: 'center'
    },
    logout_css: {
        width: 28,
        height: 28,
        marginLeft: 5,
        opacity: 0.65
    },
    logout_container: {
        position: 'absolute',
        left: '91%',
        top: 16
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginTop:30,
    },
    profileImg: {
        width: 140,
        height: 180,
        borderRadius:10
    },
    single_button: {
        backgroundColor: '#cc3675',
        borderRadius: 10,
        alignSelf: 'flex-start',
        margin: 5,
        paddingLeft: 2,
        paddingRight: 2,
        paddingBottom: 2
    },
    button_text: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'SNORTER PERSONAL USE',
        alignSelf: 'center'
    },
    wrapper_fav:{
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

export default Profile;