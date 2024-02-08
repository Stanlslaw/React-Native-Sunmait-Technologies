/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {colors} from './src/assets/colors/common.ts';
import HomeScreen from './src/screens/Home';
import LoginPage from './src/screens/Login';
import LoginScreen from './src/screens/Login';
import ProfileScreen from './src/screens/Profile';
import Register from './src/screens/Register';
import RegisterScreen from './src/screens/Register';
import SearchScreen from './src/screens/Search';

export type RootStackParamList = {
  Login: {handleSignedIn: any};
  Register: {handleSignedIn: any};
};

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const handleSignedIn = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: colors.white}}>
      <NavigationContainer>
        {isSignedIn ? (
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {fontSize: 12},
              tabBarActiveTintColor: colors.lightGrey,
            }}
            initialRouteName={'Home'}>
            <Tab.Screen
              name={'Home'}
              options={{
                tabBarIcon: ({focused, color, size}) => (
                  <Ionicons
                    name={focused ? 'home' : 'home-outline'}
                    size={size}
                    color={color}
                  />
                ),
              }}
              component={HomeScreen}
            />
            <Tab.Screen
              name={'Search'}
              options={{
                tabBarIcon: ({focused, color, size}) => (
                  <Ionicons
                    name={focused ? 'search' : 'search-outline'}
                    size={size}
                    color={color}
                  />
                ),
              }}
              component={SearchScreen}
            />
            <Tab.Screen
              name={'Profile'}
              options={{
                tabBarIcon: ({focused, color, size}) => (
                  <Ionicons
                    name={focused ? 'person' : 'person-outline'}
                    size={size}
                    color={color}
                  />
                ),
              }}
              component={ProfileScreen}
            />
          </Tab.Navigator>
        ) : (
          <RootStack.Navigator initialRouteName={'Login'}>
            <RootStack.Screen
              name={'Login'}
              component={LoginScreen}
              initialParams={{handleSignedIn: handleSignedIn}}
            />
            <RootStack.Screen
              name={'Register'}
              component={RegisterScreen}
              initialParams={{handleSignedIn: handleSignedIn}}
            />
          </RootStack.Navigator>
        )}
      </NavigationContainer>
      {Platform.OS === 'ios' ? (
        <StatusBar backgroundColor="transparent" />
      ) : (
        <StatusBar
        // translucent
        // backgroundColor="transparent"
        />
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

export default App;
