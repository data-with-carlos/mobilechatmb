import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
    const navigation = useNavigation();

    const navigateToProfile = () => {
        navigation.navigate('PerfilScreen');
    };

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <TouchableOpacity onPress={navigateToProfile}>
                    <View style={styles.header}>
                        <View style={styles.userInfo}>
                            <Image 
                                source={require('../../assets/Person.jpg')} //FOTO DO USUARIO COM A MENSAGEM
                                style={styles.profilePicture}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.username}>Antônio Ramos</Text>
                                <Text style={styles.email}>tonyramos@moscabranca.com</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={styles.drawerItems}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.drawerOption}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
                        <Text style={styles.drawerOption}>Perfil Flyer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat Mosca Branca')}>
                        <Text style={styles.drawerOption}>Chat Mosca Branca</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cadastro de Produto')}>
                        <Text style={styles.drawerOption}>Cadastrar Produto</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Calcular Preço')}>
                        <Text style={styles.drawerOption}>Calcular preço</Text>
                    </TouchableOpacity>
                    { /*Removido o acesso a tela de FormularioScreens via Drawer*/ }
                    <TouchableOpacity onPress={() => navigation.navigate('Historico de Custos')}>
                        <Text style={styles.drawerOption}>Historico de Custos e Receitas</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        marginTop: 100,
    },
    drawerItems: {
        flex: 1,
        marginLeft: 25,
        marginTop: 40,
    },
    header: {
        marginBottom: 20,
        alignItems: 'center',
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profilePicture: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    textContainer: {
        marginLeft: 5, //ESPAÇAMENTO DA FOTO COM NOME/EMAIL
    },
    username: {
        fontSize: 18, 
        fontWeight: '600', //COR DO NOME DO USUARIO (100~900)
    
    },
    email: { // O EMAIL DO PERSON (SE AUMENTAR O TAMANHO A FOTO VAZA)
        fontSize: 13,
        color: 'gray',
    },
    drawerOption: { //NOMES DO MENU
        fontSize: 20,
        marginBottom: 15,
        fontWeight: '400',
    },
});

export default CustomDrawerContent;
