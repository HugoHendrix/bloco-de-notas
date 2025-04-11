function updateTime() {
    const dateTimeElement = document.querySelector('.datetime');
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const greetingElement = document.getElementById('greeting');

    const horaAtual = new Date();
    const hora = horaAtual.getHours();

    let saudacao = "";

    if (hora >= 5 && hora < 12) {
        saudacao = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        saudacao = "Boa tarde!";
    } else if (hora >= 18 && hora <= 23) {
        saudacao = "Boa noite!";
    } else {
        saudacao = "Boa madrugada!"
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = horaAtual.toLocaleDateString('pt-BR', options);
    const horaFormatada = horaAtual.toLocaleTimeString();

    dateElement.textContent = `Hoje é ${dataFormatada}`;
    timeElement.textContent = `⏰ ${horaFormatada}`;
    greetingElement.textContent = saudacao;

    dateTimeElement.style.display = 'block';

}

updateTime();
setInterval(updateTime, 1000);



// Detecta a mudança de página
window.addEventListener('load', function () {
    document.addEventListener('visibilitychange', function () {
        // Atualiza o title
        if (document.hidden) {
            document.title = 'EI ... VOLTA AQUI 💔';
        } else {
            document.title = 'Bloco de Notas Digital';
        }
    });
});


//Função salvar a pasagem de turno
document.querySelector("#anotacoes").value = localStorage.getItem("anotacoes");
function salvar() {
    localStorage.setItem("anotacoes", document.querySelector("#anotacoes").value);
}

//Função salvar a anotação geral
document.querySelector("#anotacoes-gerais").value = localStorage.getItem("anotacoes-gerais");
function salvar() {
    localStorage.setItem("anotacoes-gerais", document.querySelector("#anotacoes-gerais").value);
}

//Função copiar pasagem de turno
function copiar_texto_anotacoes() {
    var textoCopiado = document.getElementById("anotacoes");
    textoCopiado.select();
    document.execCommand("copy");
}

//Função copiar elementos pelo ID
function copiarTextoPorId(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.select();
        document.execCommand("copy");
    } else {
        console.error(`Elemento com ID '${idElemento}' não encontrado.`);
    }
}

function copiarTextoPorId(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        // Cria um elemento de texto temporário
        const tempInput = document.createElement("textarea");
        tempInput.value = elemento.value || elemento.textContent; // Pega o valor ou o conteúdo de texto do elemento
        document.body.appendChild(tempInput);
        tempInput.select(); // Seleciona o texto
        document.execCommand("copy"); // Copia o texto
        document.body.removeChild(tempInput); // Remove o elemento temporário
        console.log("Texto copiado com sucesso!"); // Feedback no console
    } else {
        console.error(`Elemento com ID '${idElemento}' não encontrado.`);
    }
}

// Função para converter para o formato do Google Maps
function converterParaGoogle() {
    const entrada = document.getElementById('input').value;

    // Passo 1: Substituir todas as vírgulas por pontos
    let saida = entrada.replace(/,/g, '.');

    // Passo 2: Substituir o ponto final entre coordenadas por espaço
    saida = saida.replace(/(\d)\.(?=-)/g, '$1 ');

    const outputElemento = document.getElementById('output');
    outputElemento.value = saida.trim(); // Remove espaços desnecessários no início ou fim

    copiarTextoPorId('output'); // Copiar automaticamente
}

// Função para converter para o formato do Trafegus
function converterParaTrafegus() {
    const entrada = document.getElementById('input').value;

    // Passo 1: Substituir os espaços entre coordenadas por vírgula
    let saida = entrada.replace(/(\d)\s+(?=-)/g, '$1,');

    // Passo 2: Substituir pontos por vírgulas
    saida = saida.replace(/\./g, ',');

    const outputElemento = document.getElementById('output');
    outputElemento.value = saida.trim(); // Remove espaços desnecessários no início ou fim

    copiarTextoPorId('output'); // Copiar automaticamente
}

// Obtenha o botão
const backToTopButton = document.getElementById("back-to-top");

// Mostrar ou esconder o botão com base na rolagem
window.onscroll = function () {
    if (window.scrollY > 300) { // Aparece após rolar 300px
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Rolar para o topo quando o botão for clicado
backToTopButton.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Suaviza o scroll
    });
};


// Automatizar mensagem do WhatsApp
document.getElementById('messageForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Captura os valores dos campos
    const driverName = document.getElementById('driverName').value;
    const plate = document.getElementById('plate').value;
    const incidentType = document.getElementById('incidentType').value;

    // Gera a mensagem com base no tipo de ocorrência
    let message = '';
    if (incidentType === 'parada_sem_macro') {
        message = `Olá *senhor ${driverName}*, identificamos a placa *${plate}* parada, mas sem envio de macros. Está tudo bem?`;
    } else if (incidentType === 'sem_reinicio') {
        message = `Olá *senhor ${driverName}*, identificamos a placa *${plate}* trafegando sem enviar o reinício de viagem. É o senhor que está no veículo? Está tudo bem?`;
    } else if (incidentType === 'perda_sinal') {
        message = `Olá *senhor ${driverName}*, tudo bem?\n\nEstamos com PERDA DE SINAL no rastreador do veículo *${plate}*. Qual sua localização por gentileza?\n\n - VIAGEM SEGUE NORMAL?`;
    } else if (incidentType === 'porta_motorista') {
        message = `${plate} - Gerou alerta de porta do motorista aberta. Em contato com o motorista, *senhor ${driverName}*, foi questionado "VIAGEM SEGUE NORMAL" e ele respondeu corretamente. Enviamos os comandos de liberação para o veículo.`;
    } else if (incidentType === 'porta_carona') {
        message = `${plate} - Gerou alerta de porta da carona aberta. Em contato com o motorista, *senhor ${driverName}*, foi questionado "VIAGEM SEGUE NORMAL" e ele respondeu corretamente. Enviamos os comandos de liberação para o veículo.`;
    } else if (incidentType === 'desengate_carreta') {
        message = `${plate} - Gerou alerta de desengate de carreta. Em contato com o motorista, *senhor ${driverName}*, foi questionado "VIAGEM SEGUE NORMAL" e ele respondeu corretamente. Enviamos os comandos de liberação para o veículo.`;
    } else if (incidentType === 'desvio_rota') {
        message = `Olá *senhor ${driverName}*, identificamos a placa *${plate}* em desvio de rota. Viagem segue normal?`;
    }

    // Exibe a mensagem gerada
    const generatedMessageElement = document.getElementById('generatedMessage');
    generatedMessageElement.textContent = message;

    // Exibe o botão de copiar
    const copyButton = document.querySelector('.message-output button');
    copyButton.style.display = 'block';
});


// ORIENTADO DO VSN NO CHECK LIST

function updateResponse() {
    const system = document.getElementById("system").value;
    const textarea = document.getElementById("response");

    let respostaSeguranca = "";

    // Texto base
    const textoBase = `Durante a viagem, caso ocorra um bloqueio ou qualquer situação identificada pela central, o motorista receberá uma pergunta de segurança.

*PERGUNTA DE SEGURANÇA*: "A viagem segue normal? / Tudo bem?"

*RESPOSTA DE SEGURANÇA (Se estiver tudo bem)*:`;

    const textoPerigo = `

*🚧 Se estiver em perigo*:  Responda com qualquer outra informação (ex: 'sim / 'tudo bem'). 
Estamos preparados para identificar isso como um sinal de perigo e acionar imediatamente o plano de contingência.`;

    // Atualiza a resposta conforme o sistema selecionado
    switch (system) {
        case "autotrac":
            respostaSeguranca = textoBase + " 4 primeiros dígitos do CPF (DALASTRA/SATEL)." + textoPerigo;
            break;
        case "sascar":
            respostaSeguranca = textoBase + " Data do dia." + textoPerigo;
            break;
        case "omnilink":
            respostaSeguranca = textoBase + " NÃO – NEGATIVO." + textoPerigo;
            break;
        case "onixsat":
            respostaSeguranca = textoBase + " PARADA EM ADUANA." + textoPerigo;
            break;
        default:
            respostaSeguranca = textoBase + " 4 primeiros dígitos do CPF." + textoPerigo;
    }

    // Atualiza o conteúdo do textarea
    textarea.value = respostaSeguranca;
}

// Inicializa a resposta ao carregar a página
window.onload = updateResponse;