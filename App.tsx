import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar,View } from 'react-native';
import React from 'react';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';
import Favourites from './src/screens/Favourites';
import TabNavigation from './src/navigation/TabNavigation';
import CityDetails from './src/screens/CityDetails';
import { FavoritesProvider } from './src/context/FavoritesProvider';

const Stack = createNativeStackNavigator();



export default function App() {
  return (

    <FavoritesProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
        />

        <View
          style={{
            flex: 1
          }}>
          <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name='Home' component={Home} />
              <Stack.Screen name='TabNavigation' component={TabNavigation} />
              <Stack.Screen name='CityDetails' component={CityDetails} />
              <Stack.Screen name='Favourites' component={Favourites} />

            </Stack.Navigator>
          </NavigationContainer>
        </View>

      </SafeAreaView>
    </FavoritesProvider>
  );
};