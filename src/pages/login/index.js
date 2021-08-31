import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import Sound from 'react-native-sound';
import logo from '../../utility/images/logo.png'

const Login = ({ login, username }) => {
  const sound = new Sound('../../utility/sound/applause.mp3')
  let name;
  return (
    <View style={style.container}>
    
      <View style={style.container_logo_name}>
        <Image source={logo} style={style.img} />
        <Text style={style.title}>Drunk in love</Text>
        <View style={style.line} />
      </View>

      <View style={style.container_form}>
        <TextInput
          placeholder='Insert your drunk nickname'
          value={name}
          onChangeText={text => name = text}
          style={style.input}
        />
        <View style={style.container_button}>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              login(true)
              username(name)
              sound.play()
              sound.setVolume(0.9);
            }}>
            <Text style={style.button_text}>Get drunk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

}
const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#F7EFCA',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  container_logo_name: {
    paddingTop: 30,
    marginBottom: 20,
    paddingBottom: 20
  },
  img: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  title: {
    paddingTop: 10,
    color: '#cc3675',
    fontSize: 60,
    fontFamily: 'SNORTER PERSONAL USE',
    fontWeight: "normal"
  },
  line: {
    paddingBottom: 30,
    borderBottomWidth: 1,
    marginLeft: '15%',
    marginRight: '15%',
    borderBottomColor: 'rgba(204, 54, 117, 0.2)',
  },
  container_form: {
    width: 300,
    height: 100,
    justifyContent: 'space-evenly'
  },
  input: {
    fontSize: 18,
    backgroundColor: 'white',
    fontFamily: 'LazyStudent-Regular',
    borderRadius: 20
  },
  container_button: {
    paddingTop: 20
  },
  button: {
    backgroundColor: '#cc3675',
    borderRadius: 10,
    width: 100,
    alignSelf: 'center',
    paddingTop: 4,
    paddingBottom: 4
  },
  button_text: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'LazyStudent-Regular',
    alignSelf: 'center'
  }
})

export default Login;
