// ========== RELÓGIO E DATA ========== //
function updateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');
    const greetingElement = document.getElementById('greeting');

    const horaAtual = new Date();
    const hora = horaAtual.getHours();

    // Saudação conforme horário
    let saudacao = hora >= 5 && hora < 12 ? "Bom dia!" :
                  hora >= 12 && hora < 18 ? "Boa tarde!" :
                  hora >= 18 && hora <= 23 ? "Boa noite!" : "Boa madrugada!";

    // Formatação de data e hora
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = `Hoje é ${horaAtual.toLocaleDateString('pt-BR', options)}`;
    timeElement.textContent = `${horaAtual.toLocaleTimeString()} ⏰`;
    greetingElement.textContent = saudacao;
}

// ========== GERENCIAMENTO DE ANOTAÇÕES ========== //
function carregarSalvos() {
    document.getElementById("anotacoes").value = localStorage.getItem("anotacoes") || "";
    document.getElementById("anotacoes-gerais").value = localStorage.getItem("anotacoes-gerais") || "";
}

function salvar(id) {
    localStorage.setItem(id, document.getElementById(id).value);
}

function limparTexto(id) {
    document.getElementById(id).value = "";
    localStorage.removeItem(id);
}

// ========== FUNÇÃO DE CÓPIA UNIVERSAL ========== //
function copiarTextoPorId(id) {
    const elemento = document.getElementById(id);
    if (elemento) {
        const texto = elemento.value || elemento.textContent;
        navigator.clipboard.writeText(texto).catch(() => {
            // Fallback para navegadores antigos
            const tempInput = document.createElement("textarea");
            tempInput.value = texto;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
        });
    }
}

// ========== PASSAGEM DE TURNO ========== //
function updateResponse() {
    const system = document.getElementById("system").value;
    const respostas = {
        autotrac: "4 primeiros dígitos do CPF (DALASTRA/SATEL)",
        sascar: "Data do dia",
        omnilink: "NÃO – NEGATIVO",
        onixsat: "PARADA EM ADUANA",
        default: "4 primeiros dígitos do CPF"
    };
    
    document.getElementById("response").value = `Durante a viagem, caso ocorra um bloqueio ou qualquer situação identificada pela central, o motorista receberá uma pergunta de segurança.

*PERGUNTA DE SEGURANÇA*: "A viagem segue normal? / Tudo bem?"

*RESPOSTA DE SEGURANÇA (Se estiver tudo bem)*: ${respostas[system] || respostas.default}

*🚧 Se estiver em perigo*: Responda com qualquer outra informação (ex: 'sim / 'tudo bem'). 
Estamos preparados para identificar isso como um sinal de perigo e acionar imediatamente o plano de contingência.`;
}

// ========== CONVERSOR DE COORDENADAS ========== //
function converterParaGoogle() {
    const entrada = document.getElementById('input').value.trim();
    if (!entrada) return;

    const saida = entrada
        .replace(/,/g, '.') // Passo 1: Padroniza decimais com pontos
        .replace(/(-?\d+)\.?[\s](-?\d+)/g, '$1.$2') // Passo 2: Corrige espaços ENTRE DECIMAIS
        .replace(/\.(?=-)/g, ' ') // Passo 3: Separa coordenadas por espaço
        .replace(/(-?\d+\.\d+)\s+(-?\d+\.\d+)/, '$1 $2') // Passo 4: Garante o formato
        .replace(/\s+/g, ' ') // Passo 5: Remove espaços extras
        .trim();

    document.getElementById('output').value = saida;
    copiarTextoPorId('output');
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


// ========== INICIALIZAÇÃO ========== //
document.addEventListener("DOMContentLoaded", function() {
    updateTime();
    setInterval(updateTime, 1000);
    carregarSalvos();
    updateResponse();
    
    // Título dinâmico
    document.addEventListener('visibilitychange', function() {
        document.title = document.hidden ? 'EI ... VOLTA AQUI 💔' : 'Bloco de Notas Digital';
    });
});