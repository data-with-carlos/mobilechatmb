import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Input from '../components/Input';

const FormularioScreens = ({navigation}) => {
  const [etapa, setEtapa] = useState(0);

  const proximasEtapas = [
    {
      question: "Qual o seu custo fixo total mensal?",
      description: "Custos fixos são gastos sempre presentes, havendo produção ou não, por exemplo: Água, energia, internet, segurança, salários e encargos trabalhistas, etc.",
      placeholder: "R$ 0,00"
    },
    {
      question: "Qual o seu custo variável total mensal?",
      description: "Custos variáveis são aqueles que variam de acordo com a produção ou vendas da empresa, ou seja, quanto maior a produtividade, maior os custos variáveis, por exemplo: Comissão de vendas, Matéria-prima, etc.",
      placeholder: "R$ 0,00"
    },
    {
      question: "Qual foi o seu investimento inicial?",
      description: "A análise de investimento inicial auxilia a visão mais clara da saúde financeira do negócio, identificando oportunidades de otimização estratégicas para o futuro. Permitindo a maximização dos retornos obtidos.",
      placeholder: "R$ 0,00"
    },
    {
      question: "Qual o seu volume de produção?",
      description: "Volume de produção é quantidade de produtos ou serviços que sua empresa fabrica em um determinado período de tempo, geralmente durante o mês, trimestre ou ano.",
      placeholder: "Volume"
    },
  ];

  const handleNext = () => {
    if (etapa < proximasEtapas.length - 1) {
      setEtapa(etapa + 1);
    } else {
      navigation.navigate('CadastroProduto');
    }
  };

  const handleBack = () => {
    if (etapa > 0) {
      setEtapa(etapa - 1);
    } else {
      navigation.navigate('ModeloNegocio');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário inicial</Text>
      <Text style={styles.question}>{proximasEtapas[etapa].question}</Text>
      <Text style={styles.description}>{proximasEtapas[etapa].description}</Text>
      <Input placeholder={proximasEtapas[etapa].placeholder} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonVoltar]} onPress={handleBack}>
          <Text style={[styles.buttonText, styles.buttonTextVoltar]}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonProximo]} onPress={handleNext}>
          <Text style={[styles.buttonText, styles.buttonTextProximo]}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({  //forms incial depois de selecionar as opçoes
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',/* Centralizei o conteudo */
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: '400',
  },
  bold: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    color: 'black',
    marginBottom: 20,
    paddingBottom: 40,
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

export default FormularioScreens;
