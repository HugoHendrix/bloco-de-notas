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

 // Função para copiar texto
 function copiarTextoPorId(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.select();
        document.execCommand("copy");        
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