import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LineChart } from 'react-native-chart-kit';
import { Svg, Line } from 'react-native-svg';

// Obter as dimensões da tela
const screenWidth = Dimensions.get('window').width || 300; // Use um valor de fallback se necessário
const chartHeight = 220;
const fixedValue = 50; // Substitua por seu valor fixo
const decorator = () => {
    return (
        <Svg>
            <Line
                x1="0"
                y1={fixedValue}
                x2={screenWidth}
                y2={fixedValue}
                stroke="red"
                strokeWidth="2"
            />
        </Svg>
    );
};

const MetricBadge = ({ label, value, isBreakeven, isAchieved }) => {
    const badgeStyle = isBreakeven ? (isAchieved ? styles.greenBadge : styles.redBadge) : styles.metricBadge;
    return (
        <View style={badgeStyle}>
            <Text style={styles.metricLabel}>{label}</Text>
            <Text style={styles.metricValue}>{value}</Text>
        </View>
    );
};
const PriceCalculatorScreen = () => {
    const [selectedProduct, setSelectedProduct] = useState('banana');
    const [quantitySold, setQuantitySold] = useState('');
    const [price, setPrice] = useState('');

    // Aqui você calcularia as métricas baseadas nas entradas
    const calculateMetrics = () => {
        // Implemente sua lógica de cálculo aqui
        return {
            averagePrice: 0, // preço médio
            minimumPrice: 0, // preço mínimo
            suggestedPrice: 0, // preço sugerido
            breakevenPoint: 0, // ponto de equilíbrio
            isBreakevenAchieved: false, // se o ponto de equilíbrio foi atingido
        };
    };

    const metrics = calculateMetrics();

    return (
        <View style={styles.container}>
            {/* Picker para selecionar o produto */}
            <Picker
                selectedValue={selectedProduct}
                onValueChange={(itemValue, itemIndex) => setSelectedProduct(itemValue)}
            >
                <Picker.Item label="Banana" value="banana" />
                {/* Adicione mais produtos conforme necessário */}
            </Picker>

            {/* Input para a quantidade vendida */}
            <TextInput
                style={styles.input}
                onChangeText={setQuantitySold}
                value={quantitySold}
                placeholder="Quantidade vendida"
                keyboardType="numeric"
            />

            {/* Input para o preço */}
            <TextInput
                style={styles.input}
                onChangeText={setPrice}
                value={price}
                placeholder="Preço"
                keyboardType="numeric"
            />

            {/* Métricas como tarjas */}
            <View style={styles.metricsContainer}>
                <MetricBadge label="Preço Médio" value={`R$ ${metrics.averagePrice.toFixed(2)}`} />
                <MetricBadge label="Preço Mínimo" value={`R$ ${metrics.minimumPrice.toFixed(2)}`} />
                <MetricBadge label="Preço Sugerido" value={`R$ ${metrics.suggestedPrice.toFixed(2)}`} />
                <MetricBadge
                    label="Equilíbrio"
                    value={`R$ ${metrics.breakevenPoint.toFixed(3)}`}
                    isBreakeven
                    isAchieved={metrics.isBreakevenAchieved}
                />
            </View>

            {/* Gráficos */}
            {/* Aqui você implementaria os gráficos usando uma biblioteca como react-native-chart-kit */}
            <LineChart
                data={{
                    labels: ['1', '2', '3', '4', '5', '6'], // Substitua com seus dados
                    datasets: [{
                        data: [ // Certifique-se de que esses dados são números válidos
                            Math.random() * 10,
                            Math.random() * 10,
                            Math.random() * 10,
                            Math.random() * 10,
                            Math.random() * 10,
                            Math.random() * 10,
                        ],
                    }],
                }}
                width={screenWidth} // Use screenWidth ou um valor numérico fixo
                height={220}
                yAxisLabel="R$"
                chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 2, // opcional, casas decimais para os valores do gráfico, default é 2
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    // Continue com o resto do seu chartConfig
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    // Continue com o resto do seu estilo, se necessário
                }}
                decorator={decorator}
                withDots={false}
            />
            {/* Você adicionaria um segundo gráfico aqui, semelhante ao primeiro */}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', // Fundo branco para o container
        padding: 20,
    },
    input: {
        height: 50,
        borderColor: '#e6e6e6', // Bordas mais claras para os inputs
        borderWidth: 1,
        borderRadius: 4, // Bordas arredondadas
        marginVertical: 10,
        paddingHorizontal: 15, // Padding interno horizontal para os textos dos inputs
    },
    metricsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 20,
    },
    metricBadge: {
        backgroundColor: '#f7f7f7', // Cor de fundo mais neutra para as tarjas
        paddingVertical: 20, // Padding vertical para aumentar a altura da tarja
        width: '48%', // Ajustar a largura para que duas caixas fiquem lado a lado
        borderRadius: 8, // Bordas arredondadas para as tarjas
        marginVertical: 8, // Margem vertical para separar as tarjas
        justifyContent: 'center',
        alignItems: 'center',
    },
    greenBadge: {
        backgroundColor: '#34c759', // Um verde mais suave para o sucesso
    },
    redBadge: {
        backgroundColor: '#ff3b30', // Um vermelho mais suave para o alerta
    },
    metricLabel: {
        fontSize: 14,
        color: '#333', // Cor de texto padrão
        marginBottom: 5, // Espaço entre o rótulo e o valor
    },
    metricValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // Cor de texto padrão
    },
    green: {
        color: '#34c759', // Ajustar a cor para um verde semelhante ao das tarjas
    },
    red: {
        color: '#ff3b30', // Ajustar a cor para um vermelho semelhante ao das tarjas
    },
    chart: {
        // Estilos específicos para o gráfico permanecem os mesmos
        width: '40%',
        config: {
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
                borderRadius: 16,
            },
        },
        style: {
            marginVertical: 8,
            borderRadius: 16,
        },
    },
});


export default PriceCalculatorScreen;
