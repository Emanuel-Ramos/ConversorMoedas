import React, {Component} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ImageBackground} from 'react-native';
import api from '../services/api.js'



class Conversor extends Component{
    constructor(props){
        super(props);
        this.state = {
          moedaA: props.moedaA,
          moedaB: props.moedaB,
          moedaB_V: 0,
          valorConvertido: 0,
          img: require('../imagem/new.jpg')
        }
        this.converterValor = this.converterValor.bind(this)
        
      }
    async converterValor(){
        let de_para = this.state.moedaA + '_' + this.state.moedaB
        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`)
        
        let cotacao = response.data[de_para]
        let resultado = (cotacao * parseFloat(this.state.moedaB_V))
        this.setState({
            valorConvertido: resultado.toFixed(2)
          });
        this.setState({
          img: require('../imagem/jesus.jpg')
        })
        
    }
    render(){
        return(
            <View style={styles.container}>
              <ImageBackground source={this.state.img} style={styles.image}>
                <KeyboardAvoidingView style={styles.escolhas}>
                  <TextInput style={styles.escolha1} placeholder='Ex: BRL' onChangeText={(texto) => this.setState({moedaA: texto.toUpperCase()})} ></TextInput>
                  <Text style={styles.texto}>Para</Text>
                  <TextInput style={styles.escolha2} placeholder='Ex: USD' onChangeText={(texto) => this.setState({moedaB: texto.toUpperCase()})}></TextInput>
                </KeyboardAvoidingView>
                <KeyboardAvoidingView style={styles.areaValor}>
                <TextInput placeholder='Valor a ser convertido ' style={styles.input}
                onChangeText={(moedaB_V) =>this.setState({moedaB_V})} keyboardType='numeric'></TextInput>
                <TouchableOpacity style={styles.botao} onPress={this.converterValor}>
                    <Text style={styles.botaoTexto}>Converter</Text>
                </TouchableOpacity>
                <Text style={styles.textoValor}>
                    {this.state.valorConvertido} 
                </Text>
                </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  
      texto: {
        fontSize: 20,
        margin: 15
      },
      valorConvertido: {
        flex: 1
      },
      escolhas: {
        flex: 0.3,
        marginBottom: 50,
        flexDirection: 'row'
          
      },
      escolha1: {
        height: 25,
        width: 60,
        margin: 20
      },
      escolha2: {
        height: 25,
        width: 60,
        margin: 20
      },
      botao: {
        width: 150,
        height: 45,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
      },
      textoValor: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
      },
      input: {
        width: 280,
        height: 55,
        backgroundColor: '#CCC',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        borderRadius: 5,
        
        
      },
      areaValor: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
      },
      botaoTexto:{
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF'
      },
      image: {
        flex: 1,
        justifyContent: "center",
        resizeMode: 'cover'
        
      },

  
    
  });
  
  export default Conversor