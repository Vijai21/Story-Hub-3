import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import db from '../Config'

export default class ReadStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            allStories: [],
        }
    }

    readStories=()=>{
      var allStories = []
      var stories = db.collection('stories').get()
      .then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
              allStories.push(doc.data())
          })
          this.setState({
              allStories: allStories
          })
      })
    }

    componentDidMount(){
        this.readStories()
    }

    render(){
        return(
          <View>
              <FlatList data = {this.state.allStories} renderItem = {({item})=>{
                  <View style = {styles.itemContainer}>
                      <Text> Title: {item.title} </Text>
                      <Text> Author: {item.author} </Text>
                  </View>
              }} keyExtractor = {(item,index)=>{index.toString()}} />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
    },

    item: {
        backgroundColor: 'pink',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 60,
    },

    title: {
        fontSize: 20,
    },

    itemContainer: {
        height: 80,
        width: '100%',
        borderWidth: 2,
        borderColor: 'pink',
        justifyContent: 'center',
        alignSelf: 'center',
    }
})