import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TouchableOpacity, View } from 'react-native';
import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import Home from './src/pages/Home';
import DeliveryList from './src/pages/DeliveryList';


const Stack = createStackNavigator();

function acessLogin() {
   
  <View style={{height: '100%', width: 70}}>
    

  </View>
}


export default function App( ) {

  const ConfigHeader = () => {
    return (
      <TouchableOpacity onPress={acessLogin} style={{ paddingLeft: 10 }}>
        <Image
          style={{ width: 30, height: 30 }}
          source={require('./assets/Config.png')}
        />
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Image
                style={{ width: 60, height: 40 }}
                source={require('./assets/FHicone.png')}
              />
            ),
            headerLeft: () => ConfigHeader(), 
          }}
        />

        <Stack.Screen
          name="DeliveryList"
          component={DeliveryList}
          options={{
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Image
                style={{ width: 60, height: 40 }}
                source={require('./assets/FHicone.png')}
              />
            ),
            headerLeft: () => ConfigHeader(), 
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
