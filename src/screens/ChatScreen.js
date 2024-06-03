import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { executarOtimizador, consultarCustosTotais } from '../api/ApiServices';
import { perguntarSobreDownload } from '../ultils/ultils.js';
import { PDFViewer, Document, Page } from '@react-pdf/renderer';
import ChartComponent from '../components/ChartComponent';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    newMessages.forEach((message) => {
      if (message.text.toLowerCase().includes("executar otimizador")) {
        executarOtimizador().then(data => {
          let dadosFormatados = "Produção:";
          Object.keys(data).forEach(key => {
            dadosFormatados += `\n${key}: ${data[key]}`;
          });

          // Envia os dados formatados e a pergunta sobre o download como mensagens no chat
          const dadosMessage = {
            _id: Math.round(Math.random() * 1000000),
            text: dadosFormatados,
            createdAt: new Date(),
            user: { _id: 2, name: 'Bot' },
          };

          perguntarSobreDownload(dadosMessage);
        }).catch(error => {
          console.error('Erro ao executar otimizador:', error);
        });
      } else if (message.text.toLowerCase().includes("qual custo total atual da empresa")) {
        consultarCustosTotais().then(data => {
          // Suponha que 'data' contenha a informação formatada do custo total
          const custoTotalMessage = {
            _id: Math.round(Math.random() * 1000000),
            text: `Custo total atual da empresa: ${data.cost_value}`,
            createdAt: new Date(),
            user: { _id: 2, name: 'Bot' },
          };

          perguntarSobreDownload(custoTotalMessage);
        }).catch(error => {
          console.error('Erro ao consultar custos totais:', error);
        });
      }
    });

    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  const perguntarSobreDownload = (mensagemAnterior) => {
    const perguntaDownloadMessage = {
      _id: Math.round(Math.random() * 1000000),
      text: "Deseja fazer o download do relatório?",
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Bot',
      },
      quickReplies: {
        type: 'radio', // ou 'checkbox' para múltipla escolha
        keepIt: true,
        values: [
          {
            title: 'Sim',
            value: 'sim',
          },
          {
            title: 'Não',
            value: 'nao',
          },
        ],
      },
    };

    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, [mensagemAnterior, perguntaDownloadMessage])
    );
  };

  const onQuickReply = (quickReply) => {
    quickReply.forEach((reply) => {
      if (reply.value === 'sim') { // Certifique-se de que o valor corresponde ao definido na sua mensagem de quick reply
        const downloadMessage = {
          _id: Math.round(Math.random() * 1000000), // Gera um ID único para a nova mensagem
          text: "Clique aqui para fazer Download", // Texto da mensagem a ser exibido no chat
          createdAt: new Date(), // Define a data e hora atuais para a mensagem
          user: { _id: 2, name: 'Bot' }, // Define o remetente da mensagem como o bot
        };

        // Atualiza o estado 'messages' para incluir a nova mensagem
        setMessages(previousMessages =>
          GiftedChat.append(previousMessages, [downloadMessage])
        );

        console.log('Usuário quer fazer o download do relatório.');
      }
    });
  };

  const chartData = {
    labels: ['Producao1', 'Producao2', 'Producao3', 'Producao4', 'Producao5', 'Producao6', 'Producao7', 'Producao8', 'Producao9', 'Producao10'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{ _id: 1 }}
      onQuickReply={onQuickReply}
      renderCustomView={(props) => <ChartComponent data={chartData} />}
    />
  );
};

export default ChatScreen;