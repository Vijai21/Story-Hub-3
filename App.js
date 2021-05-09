import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';
import {createAppContainer} from 'react-navigation';

export default function App() {
  return (
      <AppContainer />
  );
}

const AppTabNavigator = createBottomTabNavigator({
    WriteStoryScreen: {screen: WriteStoryScreen,
        navigationOptions: {
            tabBarIcon: <Image source = {require('./assets/write.png')} style = {{width: 20, height: 20}} />,
            tabBarLabel: 'Write Story'
    }},
    ReadStoryScreen: {screen: ReadStoryScreen,
      navigationOptions: {
        tabBarIcon: <Image source = {require('./assets/read.png')} style = {{width: 20, height: 20}} />  ,
        tabBarLabel: 'Read Story'
      }},
})

const AppContainer = createAppContainer(AppTabNavigator)
