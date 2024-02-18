
import React from 'react';
import { StatusBar, View } from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#38A69D"} barStyle={'light-content'}/>
     <Routes/> 
    </NavigationContainer>
  );
}


export default App;
