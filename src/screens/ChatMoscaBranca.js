import React, { useState, useEffect } from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { TouchableOpacity, Text, View } from 'react-native';
import { executarOtimizador, consultarCustosTotais } from '../api/ApiServices';
import { useNavigation } from '@react-navigation/native';

const ChatMoscaBranca = () => {
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            onReceiveResponse('Olá, eu sou a Assistente Virtual da MB. Como posso te ajudar?', [
                { title: 'Venda', value: 'Venda' },
                { title: 'Compra', value: 'Compra' },
                { title: 'Falar com um humano', value: 'Atendente' },
            ]);
        }, 1000);
    }, []);

    const messageFlows = {
        default: [
            { title: 'Venda', value: 'Venda' },
            { title: 'Compra', value: 'Compra' },
            { title: 'Falar com um humano', value: 'Atendente' }
        ],
        Venda: [
            { title: 'Produto', value: 'Produto' },
            { title: 'Serviço', value: 'Serviço' }
        ],
        Produto: [
            { title: 'Castanha assada', value: 'Castanha assada' },
            { title: 'Castanha caramelizada', value: 'Castanha caramelizada' },
            { title: 'Óleo de castanha', value: 'Óleo de castanha' }
        ],
        Serviço: [
            { title: 'SaaS', value: 'software as service' },
            { title: 'Consultoria', value: 'Consultoria de custos' },
            { title: 'IA', value: 'Sistema de Inteligência artificial' }
        ]
    };

    const onSend = newMessages => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
        const lastMessage = newMessages[newMessages.length - 1].text.toLowerCase();
        const flow = messageFlows[lastMessage] || messageFlows.default;
        setTimeout(() => {
            if (lastMessage === 'oi') {
                onReceiveResponse('Olá, eu sou a Assistente Virtual da MB. Como posso te ajudar?', messageFlows.default);
            } else if (lastMessage.includes('executar otimizador')) {
                executarOtimizador()
                    .then(data => {
                        const responseMessage = {
                            _id: messages.length + 1,
                            text: `Produção: \n${JSON.stringify(data, null, '\t')}`,
                            createdAt: new Date(),
                            user: {
                                _id: 2,
                               //name: 'M B',
                                avatar: '../../assets/IconChatPreto.png',
                            }
                        };
                        setMessages(previousMessages => GiftedChat.append(previousMessages, [responseMessage]));

                        const questionMessage = {
                            _id: messages.length + 2,
                            text: 'Deseja visualizar relatório?',
                            createdAt: new Date(),
                            user: {
                                _id: 2,
                                //name: 'M B',
                                avatar: '../../assets/IconChatPreto.png',
                            },
                            quickReplies: {
                                type: 'radio',
                                keepIt: true,
                                values: [
                                    { title: 'Sim', value: 'sim' },
                                    { title: 'Não', value: 'nao' },
                                ],
                            },
                        };
                        setMessages(previousMessages => GiftedChat.append(previousMessages, [questionMessage]));
                    })
                    .catch(error => {
                        console.error('Erro ao executar otimizador:', error);
                        const errorMessage = {
                            _id: messages.length + 1,
                            text: 'Ocorreu um erro ao executar o otimizador. Por favor, tente novamente mais tarde.',
                            createdAt: new Date(),
                            user: {
                                _id: 2,
                                //name: 'M B',
                                avatar: '../../assets/IconChatPreto.png',
                            }
                        };
                        setMessages(previousMessages => GiftedChat.append(previousMessages, [errorMessage]));
                    });
            } else if (lastMessage.includes('custo total atual da empresa')) {
                consultarCustosTotais().then(data => {
                    const custoTotalMessage = {
                        _id: messages.length + 1,
                        text: `Custo total atual da empresa: ${data.cost_value}`,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'M B'
                            
                        }
                    };
                    setMessages(previousMessages => GiftedChat.append(previousMessages, [custoTotalMessage]));
                })
                    .catch(error => {
                        console.error('Erro ao consultar custo total atual da empresa:', error);
                        const errorMessage = {
                            _id: messages.length + 1,
                            text: 'Ocorreu um erro ao consultar o custo total atual da empresa. Por favor, tente novamente.',
                            createdAt: new Date(),
                            user: {
                                _id: 2,
                                //name: 'M B', 
                                avatar: '../../assets/IconChatPreto.png',
                            }
                        };
                        setMessages(previousMessages => GiftedChat.append(previousMessages, [errorMessage]));
                    });
            } else {
                onReceiveResponse(lastMessage, flow);
            }
        }, 1000);
    };

    const onReceiveResponse = (messageText, options) => {
        const response = {
            _id: messages.length + 1,
            text: messageText,
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'M B',
                avatar: '../../assets/IconChatPreto.png',
            },
            quickReplies: {
                type: 'radio',
                keepIt: true,
                values: options.map(option => ({ title: option.title, value: option.value })),
            },
        };
        setMessages(previousMessages => GiftedChat.append(previousMessages, [response]));
    };

    const handleQuickReply = quickReply => {
        const selectedValue = quickReply[0].value;
        if (selectedValue === 'sim') {
            navigation.navigate('PriceCalculatorScreen');
        } else if (selectedValue === 'nao') {
        } else if (selectedValue === 'Venda') {
            onReceiveResponse('Selecione o tipo de venda:', messageFlows['Venda']);
        } else if (selectedValue === 'Produto') {
            onReceiveResponse('Selecione o produto:', messageFlows['Produto']);
        }
    };

    const renderBubble = props => {
        const isBotMessage = props.currentMessage.user._id !== 1; // Verifica se a mensagem é do bot

        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#f7f7f7',
                    },
                    left: {
                        backgroundColor: isBotMessage ? '#f7f7f7' : '#007AFF',
                    },
                }}
                textStyle={{
                    right: {
                        color: 'black',
                    },

                }}
                timeTextStyle={{
                    right: {
                        color: '#000',
                    },
                }}

            />
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <GiftedChat
                messages={messages.map((message, index) => ({ ...message, _id: index.toString() }))}
                onSend={messages => onSend(messages)}
                onQuickReply={handleQuickReply}
                renderBubble={renderBubble}
                user={{
                    _id: 1,
                }}
                alwaysShowSend
                placeholder="Digite sua mensagem..."
                renderSend={props => (
                    <TouchableOpacity
                        style={{ marginRight: 10, marginBottom: 10 }}
                        onPress={() => props.onSend({ text: props.text.trim() }, true)}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Enviar</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default ChatMoscaBranca;
