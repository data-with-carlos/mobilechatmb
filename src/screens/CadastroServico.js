import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import InputField from '../components/InputField';
import BlackButton from '../components/BlackButton';
import SelectField from '../components/SelectField';

const CadastroServico = ({navigation}) => {
  const [type, setType] = useState('product');
  const [productName, setProductName] = useState('');
  const [productionCost, setProductionCost] = useState('');
  const [saleValue, setSaleValue] = useState('');

  const handleAddProduct = () => {
    // Lógica para adicionar o produto
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre um produto ou serviço</Text>
      <SelectField
        label="Tipo"
        selectedValue={type}
        onValueChange={(value) => setType(value)}
        options={[
          { label: 'Produto', value: 'product' },
          { label: 'Serviço', value: 'service' },
        ]}
      />
      <InputField
        label="Produto"
        value={productName}
        onChangeText={setProductName}
      />
      <InputField
        label="Custo de produção"
        value={productionCost}
        onChangeText={setProductionCost}
        keyboardType="numeric"
      />
      <InputField
        label="Valor de venda do produto"
        value={saleValue}
        onChangeText={setSaleValue}
        keyboardType="numeric"
      />
      <BlackButton title="Cadastrar outro produto" onPress={handleAddProduct} />
      <BlackButton title="Enviar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default CadastroServico;
