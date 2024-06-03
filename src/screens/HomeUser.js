import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Svg, Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const CircleWithPercentage = ({ percentage }) => {
  const radius = 40;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <View style={styles.svgContainer}>
      <Svg height="100" width="100">
        <Circle
          cx="50"
          cy="50"
          r={radius}
          stroke="gray"
          strokeWidth={strokeWidth}
          fill="white"
        />
        <Circle
          cx="50"
          cy="50"
          r={radius}
          stroke="black"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          origin="50, 50"
        />
      </Svg>
      <View style={styles.svgTextContainer}>
        <Text style={styles.svgText}>{percentage}%</Text>
      </View>
    </View>
  );
};

const HomeUser = () => {
  const navigation = useNavigation();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>OLÁ</Text>
        <Text style={styles.nameText}>Tony Ramos</Text>
        <Text style={styles.subtitleText}>Bem-vindo ao Mosca Branca!</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
        />
      </View>

      <View style={styles.iconRow}>
        {iconLabels.map((label, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.iconButton}
            onPress={() => handleNavigation(label)}
          >
            <Icon name={iconIcons[index]} size={30} color="#000" />
            <Text style={styles.iconLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.recentContainer}>
        <Text style={styles.recentTitle}>RECENTES</Text>
        <View style={styles.recentCard}>
          <View style={styles.recentItemRow}>
            <View style={styles.recentItem}>
              <Text style={styles.recentText}>RENTABILIDADE GERAL</Text>
              <CircleWithPercentage percentage={43} />
            </View>
            <View style={styles.recentItem}>
              <Text style={styles.recentText}>EQUILÍBRIO ANUAL</Text>
              <CircleWithPercentage percentage={77} />
            </View>
          </View>
          <View style={styles.recentItemRow}>
            <View style={styles.recentItem}>
              <Text style={styles.recentText}>CONTRATOS</Text>
              <Icon name="bar-chart-outline" size={50} color="#000" />
            </View>
            <View style={styles.recentItem}>
              <Text style={styles.recentText}>CUSTOS FIXOS</Text>
              <Icon name="trending-up-outline" size={50} color="#000" />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        {['home-outline', 'person-outline', 'notifications-outline', 'settings-outline'].map((iconName, index) => (
          <TouchableOpacity key={index}>
            <Icon name={iconName} size={30} color="#000" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const iconLabels = ['Chat', 'Calcular Preço', 'Cadastro de Servico', 'Historico de Custos'];
const iconIcons = ['chatbox-ellipses-outline', 'bar-chart-outline', 'document-text-outline', 'cash-outline'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  welcomeContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    alignItems: 'center',
    paddingTop: 20
  },
  iconButton: {
    alignItems: 'center',
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 12,
  },
  recentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 150
  },
  recentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  recentCard: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  recentItemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  recentItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: '48%',
  },
  recentText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  svgContainer: {
    position: 'relative',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgTextContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
});

export default HomeUser;
