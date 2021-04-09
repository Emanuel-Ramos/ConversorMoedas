import React, {Component} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import Conversor from './src/Conversor/index'

//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=aca04bfa81b9537acfa0


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      moedaA:'USD',
      moedaB:'BRL'
    }
    
  }
  

  render(){
    return(
      <View style={styles.container}>
        
        <Conversor/>
        
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover'
    },
    texto: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'orange',
      fontStyle: 'italic'
    },
    

  
});

export default App