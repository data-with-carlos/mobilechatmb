import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RedefinirSenha = ({navigation}) => {
  
  // Adicionados as constantes
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
          <Text style={styles.title}>REDEFINIR SENHA</Text>
          
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Nova senha</Text>
            <TextInput style={styles.input}
              placeholder="***"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            </View>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirmar nova senha</Text>
            <TextInput style={styles.input}
              placeholder="***"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
    
          <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Login')}}>
            <Text style={styles.buttonText}>Redefinir Senha</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
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
      //título de fora confirm senha e senha 
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
    });
    export default RedefinirSenha;