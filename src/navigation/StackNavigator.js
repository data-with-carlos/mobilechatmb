import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Inicial from '../screens/Inicial';
import LoginScreen from '../screens/LoginScreen';
import CriarConta from '../screens/CriarConta';
import ModeloNegocio from '../screens/ModeloNegocio';
import FormularioScreens from '../screens/FormularioScreens';
import HistoricoScreen from '../screens/HistoricoScreen';
import RedefinirSenha from '../screens/RedefinirSenha';
import CadastroProduto from '../screens/CadastroProduto';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Bem vindo!">
        <Stack.Screen name="Bem vindo!" component={Inicial} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: true}}/>
        <Stack.Screen name="CadastroProduto" component={CadastroProduto} />
        <Stack.Screen name="Criar Conta" component={CriarConta} options={{headerShown: true}}/>
        <Stack.Screen name="ModeloNegocio" component={ModeloNegocio} options={{headerShown: false}}/>
        <Stack.Screen name="FormularioScreens" component={FormularioScreens} options={{headerShown: false}}/>
        <Stack.Screen name="Custos e Receitas" component={HistoricoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Redefinir Senha" component={RedefinirSenha} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default StackNavigator;
