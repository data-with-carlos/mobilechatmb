// App.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

{/* Adicionei o parâmetro navigation */}
const LoginScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ENTRAR</Text>
      <Text style={styles.subtitle}>Acompanhe suas informações de qualquer lugar</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
        <TouchableOpacity onPress={() => navigation.navigate('Recuperar Senha')}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      
      <Text style={styles.or}>ou acesse com</Text>
      
      <View style={styles.socialContainer}>
        <Icon.Button name="linkedin" backgroundColor="#3b5998" size={30} iconStyle={styles.icon} />
        <Icon.Button name="google" backgroundColor="#db4437" size={30} iconStyle={styles.icon} />
        <Icon.Button name="apple" backgroundColor="#000000" size={30} iconStyle={styles.icon} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Criar Conta')}>
        <Text style={styles.signup}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 50, //distanciar subtítulo do input (email - senha)

  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  //título de fora (nome, e-mail..)
  label: {
    fontSize: 16,
    marginBottom: 10,
    paddingTop: 9,
  },
  //configurações da borda
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
  },
  //texto 'esqueceu sua senha?'
  forgotPassword: {
    textAlign: 'right',
    color: '#555',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },

  //texto acesse com (contas variadas)
  or: {
    paddingTop: 20,
    marginVertical: 20,
    fontSize: 17,
    color: '#555',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  icon: {
    marginRight: 0,
  },

   //texto não tem uma conta existente: Cadastre-se
  signup: {
    color: '#555',
    textDecorationLine: 'underline',
    paddingTop: 50,
  },
});

export default LoginScreen;