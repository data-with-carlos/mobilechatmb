// Função para executar o otimizador
export const executarOtimizador = () => {
    return fetch('http://3.81.43.125/gerenciador/executar_otimizador/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // Inclua aqui os dados necessários para a API, se houver
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da rede');
            }
            return response.json();
        });
};

// Função para consultar os custos totais
export const consultarCustosTotais = () => {
    return fetch('http://3.81.43.125/costs/costs/somar', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "type": 0,
            "company_id": 0
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na resposta da rede');
            }
            return response.json();
        });
};
