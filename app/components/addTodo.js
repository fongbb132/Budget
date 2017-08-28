import React, {Component} from 'react';
import { StyleSheet, Spinner, Text, View, ScrollView, TouchableOpacity, TextInput,  } from 'react-native';
import styles from './app.js'

let AddTodo = ({dispatch}) => {

    return (


        <View style={styles.footer}>
        <TouchableOpacity onPress= {(noteText)=> dispatch(addTodo(noteText))} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        <TextInput style={styles.textInput}
          onChangeText={(noteText)=> this.setState({noteText})} value={this.state.noteText}
          placeholder = '> note' placeholderTextColor='white' underlineColorAndroid='transparent'
        >
        
        </TextInput>
        </View>


        <TextInput style={styles.textInput}
            onChangeText={(noteText)=> dispatch(addTodo(noteText))} value={this.state.noteText}
            placeholder = '> note' placeholderTextColor='white' underlineColorAndroid='transparent'
          >
          
          </TextInput>
    )
}

  AddTodo = connect()(AddTodo)
  
  export default AddTodo