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
    timeElement.textContent = ` ${horaFormatada} ⏰`;
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


// Funções Genéricas
function carregarSalvos() {
    document.querySelector("#anotacoes").value = localStorage.getItem("anotacoes") || "";
    document.querySelector("#anotacoes-gerais").value = localStorage.getItem("anotacoes-gerais") || "";
}

function salvar(id) {
    const texto = document.getElementById(id).value;
    localStorage.setItem(id, texto);
    
}

function copiarTextoPorId(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        // Cria um textarea temporário
        const tempInput = document.createElement("textarea");
        tempInput.value = elemento.value; // Pega o valor REAL do textarea
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        
    }
}

function limparTexto(id) {
    document.getElementById(id).value = "";
}



// Inicialização
document.addEventListener("DOMContentLoaded", carregarSalvos);
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