import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RecoverScreen = ({navigation}) => {
  
  // Adicionado as constantes
  const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
          <Text style={styles.title}>RECUPERAR SENHA</Text>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="exemplo@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>
    
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Redefinir Senha')}>
            <Text style={styles.buttonText}>Recuperar Senha</Text>
          </TouchableOpacity>
    
          <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
            <Text  style={styles.signup}>Lembrou da senha? Entrar</Text>
          </TouchableOpacity>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 50,
      },
      
      inputContainer: {
        width: '100%',
        marginBottom: 15,
      },
      //título de fora e-mail
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
     
      button: {
        backgroundColor: 'black',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 20,
      },
      
      //texto lembrou da senha
        signup: {
        color: 'gray',
        textDecorationLine: 'underline',
        paddingTop: 50,

      },
    });

export default RecoverScreen;