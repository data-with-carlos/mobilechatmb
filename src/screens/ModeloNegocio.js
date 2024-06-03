import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

function ModeloNegocio({ navigation }) {
  const [checked, setChecked] = useState('Produtor');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário inicial</Text>
      <Text style={styles.question}>Qual o seu modelo de negócio?</Text>
      <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Item label="Produtor" value="Produtor" />
          <RadioButton.Item label="Saas" value="Saas" />
          <RadioButton.Item label="Consultor" value="Consultor" />
          <RadioButton.Item label="Comércio" value="Comércio" />
          <RadioButton.Item label="Indústria" value="Indústria" />
          <RadioButton.Item label="Serviço" value="Serviço" />
        </View>
      </RadioButton.Group>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonVoltar]} onPress={() => {navigation.navigate('Criar Conta')}}>
          <Text style={[styles.buttonText, styles.buttonTextVoltar]}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonProximo]} onPress={() => {navigation.navigate('FormularioScreens')}}>
          <Text style={[styles.buttonText, styles.buttonTextProximo]}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    marginTop: -40, // Ajuste a margem superior do contêiner conforme necessário
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 10, // Reduzi a margem inferior para subir o título
    textAlign: 'center',
  },
  question: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  radioButtonContainer: { //espaçamento dos botoes
    marginBottom: 30,
    
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: { //botao proximo e voltar
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonVoltar: {
    backgroundColor: 'white', // Fundo branco para o botão Voltar
    borderWidth: 1,
    borderColor: 'black', // Borda preta
  },
  buttonProximo: {
    backgroundColor: 'black', // Fundo preto para o botão Próximo
  },
  buttonText: {
    fontSize: 17,
  },
  buttonTextVoltar: {
    color: 'black', // Texto preto para o botão Voltar
    fontWeight: '600',
  },
  buttonTextProximo: {
    color: 'white', // Texto branco para o botão Próximo
    fontWeight: '400',
  },
});

export default ModeloNegocio;
