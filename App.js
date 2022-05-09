import React, { Component } from 'react';
import {TextInput, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


export default class App extends Component {
  constructor(props){
    //this.state:保存了所有参数的状态，第一个数和操作符，第二个数，以及显示的内容
      super(props);
      this.state = {          
             number1:null,
             number2:null,
             number3:null,
             sum:0,
       }
   }
    _onPressButton() {
       let result = parseInt(this.state.number1) + parseInt(this.state.number2)+ parseInt(this.state.number3);
       this.setState({
         sum:result,
       });
      }
     
   setNumber1(text) {
     this.setState({
       number1:text
     })
   }
   setNumber2(text) {
     this.setState({
       number2:text
     })
   }
   setNumber3(text) {
     this.setState({
       number3:text
     })

  }

      

  render() {
    
    return (
       <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.text}>Calculator</Text>
            </View>
            <View>
              <Text style={styles.resultText}>Please Input: </Text>
            </View>
            <View>
                <TextInput style={styles.inputText} onChangeText={text=>this.setNumber1(text)}/>
                <Text style={styles.signText}>+</Text>
                <TextInput style={styles.inputText} onChangeText={text=>this.setNumber2(text)}/>
                <Text style={styles.signText}>+</Text>
                <TextInput style={styles.inputText} onChangeText={text=>this.setNumber3(text)}/>
            </View>
            <View style={styles.locationButton}>
                  <TouchableHighlight style={styles.Button} onPress={()=>this._onPressButton()}>
                       <Text style={styles.textStyle}>Calculate</Text>
                 </TouchableHighlight>
                 {/* <Button style={styles.Button} title="Calculate" onPress={()=>this._onPressButton()} /> */}
            </View>
            <View>
                <Text style={styles.resultText}>Result:</Text>
            </View>
            <View>
                <Text style={styles.inputText}>{this.state.sum}</Text>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
     container:{
        marginTop:80,
        flex:1,
        marginLeft:18,
        marginRight:18,
     },
     Header:{
        height:60,
        backgroundColor:'darkslateblue',
        padding:15,
     },
     text:{
      textAlign:'center',
      height: 50,
      fontSize:35,
      color:'white',
     },
     Button:{
        width:200,
        height:50,
        borderRadius:160,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(251, 51, 51)',
     },
     locationButton:{
        marginTop:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
     },
     textStyle:{
        textAlign:'center',
        color:'white',
        fontSize:25,
     },
     inputText:{
        textAlign:'center',
        fontSize:35,
        color:'black',
        marginTop:10,
        height:50,
        backgroundColor:'rgb(233,233,233)',
     },
     resultText:{
        marginTop:30,
        fontSize:30,
        color:'black',
        height:50,
     },
     signText: {
        textAlign:'center',
        height: 50,
        fontSize:50,
        color:'black',
     }
});