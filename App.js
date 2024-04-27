import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import Registration from './src/pages/Registration';
import Home from './src/pages/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name="Registration" component={Registration} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}