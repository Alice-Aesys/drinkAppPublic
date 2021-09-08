import React, { useState } from 'react'
import { Image, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { searchByName } from '../../utility/api/api'
import img from '../../utility/images/search.png'

const SearchBar = ({val}) => {

    const [word, setWord] = useState()

    function call(){
        searchByName(word).then(resp=>val(resp.data.drinks))
    }

    return (
        <View style={style.container}>
            <TextInput onChangeText={(e)=>setWord(e)} style={style.txt} placeholder='search your favorite'></TextInput>
            <TouchableOpacity onPress={call()}><Image source={img} style={style.imm}/></TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
container:{
    height: 40,
    marginTop:'10%',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    alignSelf:'center',
    borderRadius: 20,
    backgroundColor:'white',
    width: '70%',
    justifyContent:'center'
},
imm:{
    width:25,
    height:25,
    marginRight: 10,
    
},
txt:{
    fontSize: 18,
    backgroundColor: 'white',
    fontFamily: 'SNORTER PERSONAL USE',
    borderRadius: 20,
    width:'85%',
    paddingLeft: 20
    
}
})
export default SearchBar;
