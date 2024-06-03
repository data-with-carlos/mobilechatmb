import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/TestePerson.jpg')} style={styles.profileImage} /> {/*FOTO DO USUARIO COM A MENSAGEM*/} 
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Antônio Ramos (Empreendedor Agrícola)</Text>
        <Text style={styles.biography}>Amante da natureza e das delícias que ela proporciona. Cultivando castanhas com amor e dedicação para trazer o melhor da terra até sua mesa. 🌱🌰</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  imageContainer: {
    alignItems: 'center',

  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  detailsContainer: {
    marginLeft: 10,
    paddingTop: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  biography: {
    fontSize: 16,
    width:'30vw',
    paddingTop: 10,
  },
});

export default PerfilScreen;