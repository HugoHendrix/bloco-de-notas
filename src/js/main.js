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


function copiarTextoPorId(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        elemento.select();
        document.execCommand("copy");      
    } else {
        console.error(`Elemento com ID '${idElemento}' não encontrado.`);
    }
}

