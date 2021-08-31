
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import Login from './src/pages/login';
 import { useState } from 'react';
 import Home from './src/pages/home';
 
 const App = () => {
   const [logged, setLogged] = useState(false);
   const [user, setUser] = useState()
   return (
     !logged ?
       <Login login={setLogged} username={setUser}></Login> :
       <Home name={user} login={setLogged}></Home>
   )
 }
 export default App;