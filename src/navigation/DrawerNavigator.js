import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MoscaBranca from '../screens/MoscaBranca';
import ChatMoscaBranca from '../screens/ChatMoscaBranca';
import PriceCalculatorScreen from '../screens/ChartScreen';
import PerfilScreen from '../screens/PerfilScreen';
import CustomDrawerContent from './CustomDrawerContent';
import CadastroProduto from '../screens/CadastroProduto';
import HistoricoScreen from '../screens/HistoricoScreen';
import StackNavigator from './StackNavigator';
import HomeUser from '../screens/HomeUser';
import RecoverScreen from '../screens/RecoverScreen';
import CadastroServico from '../screens/CadastroServico';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Stack" component={StackNavigator} options={{headerShown: false}}/>
            <Drawer.Screen name="Home" component={HomeUser} options={{headerShown: true}}/>
            <Drawer.Screen name="Perfil" component={PerfilScreen} options={{headerShown: true}}/> 
            <Drawer.Screen name="Mosca Branca" component={MoscaBranca} options={{headerShown: true}}/>
            <Drawer.Screen name="Cadastro de Produto" component={CadastroProduto} options={{headerShown: true}}/>
            <Drawer.Screen name="Cadastro de Servico" component={CadastroServico} options={{headerShown: true}}/>
            <Drawer.Screen name="Chat Mosca Branca" component={ChatMoscaBranca} options={{headerShown: true}}/>
            <Drawer.Screen name="Calcular Preço" component={PriceCalculatorScreen} options={{headerShown: true}}/>   
            <Drawer.Screen name="Historico de Custos" component={HistoricoScreen} options={{headerShown: true}}/>
            <Drawer.Screen name="Chat" component={ChatMoscaBranca}/>
            <Drawer.Screen name="Recuperar Senha" component={RecoverScreen} options={{headerShown: false}}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
