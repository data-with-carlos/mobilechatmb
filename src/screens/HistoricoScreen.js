import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";

const data = [
    {
        date: 'Segunda-feira, 17',
        items: [
            { type: 'expense', label: 'Aluguel do galpão', amount: 5000 },
            { type: 'income', label: 'Venda de Alimentos', amount: 50000 },
        ],
    },
    {
        date: 'Terça-feira, 18',
        items: [
            { type: 'expense', label: 'Horas extras', amount: 7000 },
            { type: 'income', label: 'Venda de Alimentos', amount: 30000 },
        ],
    },
];

const HistoricoScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="arrow-back" type="ionicon" onPress={() => { /* Lógica de navegação de voltar */ }} />
                <Text style={styles.headerTitle}>Histórico de custos e receitas</Text>
            </View>
            <Text style={styles.subHeader}>Aqui está representado quanto sua empresa efetivamente pagou por determinado ativo.</Text>
            <View style={styles.monthSelector}>
                <SlArrowLeft />
                <Text style={styles.monthText}>Abril</Text>
                <SlArrowRight />
            </View>
            <View style={styles.summary}>
                <View style={styles.summaryItem}>
                    <Text style={styles.summaryValue}>R$ 12.000</Text>
                    <Text style={styles.summaryLabel}>Custo total do mês</Text>
                </View>
                <View style={styles.summaryItem}>
                    <Text style={styles.summaryValue}>R$ 80.000</Text>
                    <Text style={styles.summaryLabel}>Receita total do mês</Text>
                </View>
            </View>
            <ScrollView style={styles.history}>
                {data.map((day, index) => (
                    <View key={index}>
                        <Text style={styles.date}>{day.date}</Text>
                        {day.items.map((item, idx) => (
                            <View key={idx} style={styles.item}>
                                <TouchableOpacity
                                    style={item.type === 'expense' ? styles.roundButton : styles.roundButton2}
                                >
                                    {item.type === 'expense' ? <BsGraphDownArrow /> : <BsGraphUpArrow />}
                                </TouchableOpacity>


                                <Text style={styles.itemLabel}>{item.label}</Text>
                                <Text style={styles.itemAmount}>R$ {item.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity style={styles.addButton} onPress={() => { /* Lógica de adicionar custos ou receitas */ }}>
                <Icon name="add" type="ionicon" color="#fff" />
                <Text style={styles.addButtonText}>Adicionar custos ou receitas</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    roundButton: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'red',
    },
    roundButton2: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'green',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subHeader: {
        textAlign: 'center',
        color: '#555',
        marginVertical: 10,
    },
    monthSelector: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    monthText: {
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    summaryItem: {
        alignItems: 'center',
    },
    summaryValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    summaryLabel: {
        color: '#555',
    },
    history: {
        flex: 1,
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    itemLabel: {
        flex: 1,
        marginLeft: 10,
    },
    itemAmount: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        paddingVertical: 15,
        borderRadius: 10,
        marginVertical: 20,
    },
    addButtonText: {
        color: '#fff',
        marginLeft: 10,
    },
});


export default HistoricoScreen;