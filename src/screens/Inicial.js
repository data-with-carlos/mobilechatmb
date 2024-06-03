import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

function Inicial({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={'../assets/logomoscabranca.png'}/>
      <Text style={styles.title}>MOSCA BRANCA</Text>
      <Text style={styles.subtitle}>&lt;DEEP TECH&gt;</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.createAccountButton} onPress={() => navigation.navigate('Criar Conta')}>
        <Text style={styles.createAccountButtonText}>Criar Conta</Text>
      </TouchableOpacity>
      <View style={styles.bottomDecoration}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { //config tela
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5 * (207 / 540), // Adjust the height based on the aspect ratio of your logo
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: { //NOME DEEP TECH
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 5,
  },
  subtitle: { 
    fontSize: 20,
    marginBottom: 50,
    color: 'gray',
  },
  button: { //BOTÃO DO ENTRAR
    backgroundColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 90,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: { //COR DA LETRA
    color: 'white',
    fontSize: 16,
  },
  createAccountButton: { //BOTAO BRANCO - CRIAR CONTA
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 5,
  },
  createAccountButtonText: { //LETRA
    color: 'black',
    fontSize: 16,
    fontWeight: '500',
  },
  bottomDecoration: { //BARRA PRETA
    position: 'absolute',
    bottom: 0,
    width: width,
    height: height * 0.1, //TAMANHO
    backgroundColor: 'black',
    borderTopLeftRadius: width * 0.2,
  },
});

export default Inicial;