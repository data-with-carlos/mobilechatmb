import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CriarConta = ({navigation}) => {
  
  // Adicionados as constantes, values e useStates - Carlos
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
          <Text style={styles.title}>CRIAR CONTA</Text>
          <Text style={styles.subtitle}>Acompanhe suas informações de qualquer lugar</Text>
          
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={name}
              onChangeText={setName}
            />
          </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
          
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput style={styles.input}
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirmar Senha</Text>
            <TextInput style={styles.input}
              placeholder="Confirmar Senha"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
    
          <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('ModeloNegocio')}}>
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>
          
          <Text style={styles.or}>ou cadastre-se com</Text>
          
          <View style={styles.socialContainer}>
            <Icon.Button name="linkedin" backgroundColor="#3b5998" size={30} iconStyle={styles.icon} />
            <Icon.Button name="google" backgroundColor="#db4437" size={30} iconStyle={styles.icon} />
            <Icon.Button name="apple" backgroundColor="#000000" size={30} iconStyle={styles.icon} />
          </View>
    
          <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
            <Text style={styles.signup}>Já tem uma conta? Entrar</Text>
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
        marginBottom: 37,
      },
      inputContainer: {
        width: '100%',
        marginBottom: 12,
      },
      //título de fora (nome, e-mail..)
      label: {
        fontSize: 15,
        marginBottom: 10,
      },
      //configurações da borda
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        fontSize: 14,
      },
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
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
      },

      //texto cadastre-se com (contas variadas)
      or: {
        paddingTop: 15,
        marginVertical: 20,
        fontSize: 16,
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
      //texto conta existente: Entrar
        signup: {
        color: '#555',
        textDecorationLine: 'underline',
        paddingTop: 18,

      },
    });
    export default CriarConta;