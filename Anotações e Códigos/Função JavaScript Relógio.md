# FUNÇÃO RELÓGIO COM SAUDAÇÃO

```javascript
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
        saudacao = "Boa madrugada!";
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = horaAtual.toLocaleDateString('pt-BR', options);
    const horaFormatada = horaAtual.toLocaleTimeString();

    dateElement.textContent = `Hoje é ${dataFormatada}.`;
    timeElement.textContent = `São: ${horaFormatada}`;
    greetingElement.textContent = saudacao;

    dateTimeElement.style.display = 'block';
}

updateTime();

setInterval(updateTime, 1000);
```

---

### **Função `updateTime`**

A função `updateTime` é usada para atualizar elementos HTML exibindo a data, a hora atual e uma saudação personalizada com base no período do dia.

---

### **Detalhamento do código**

#### 1. **Selecionando Elementos do DOM**
```javascript
const dateTimeElement = document.querySelector('.datetime');
const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');
const greetingElement = document.getElementById('greeting');
```
Essas linhas utilizam seletores do DOM para capturar elementos HTML específicos:

- `dateTimeElement`: Seleciona o elemento com a classe `datetime`.
- `dateElement`: Seleciona o elemento com o ID `date` para mostrar a data.
- `timeElement`: Seleciona o elemento com o ID `time` para mostrar a hora.
- `greetingElement`: Seleciona o elemento com o ID `greeting` para exibir uma saudação.

#### 2. **Obtendo a Hora Atual**
```javascript
const horaAtual = new Date();
const hora = horaAtual.getHours();
```
- `new Date()`: Cria um objeto `Date` contendo a data e hora atuais.
- `horaAtual.getHours()`: Extrai a hora atual (de 0 a 23) do objeto `Date`.

#### 3. **Definindo a Saudação**
```javascript
let saudacao = "";

if (hora >= 5 && hora < 12) {
    saudacao = "Bom dia!";
} else if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde!";
} else if (hora >= 18 && hora <= 23) {
    saudacao = "Boa noite!";
} else {
    saudacao = "Boa madrugada!";
}
```
Aqui é definido um texto de saudação baseado no intervalo da hora atual:

- `5 <= hora < 12`: "Bom dia!"
- `12 <= hora < 18`: "Boa tarde!"
- `18 <= hora <= 23`: "Boa noite!"
- Fora desses intervalos (0-4): "Boa madrugada!"

#### 4. **Formatando Data e Hora**
```javascript
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dataFormatada = horaAtual.toLocaleDateString('pt-BR', options);
const horaFormatada = horaAtual.toLocaleTimeString();
```
- `options`: Especifica o formato da data:
  - `weekday: 'long'`: Nome completo do dia da semana (ex.: "segunda-feira").
  - `year: 'numeric'`: Ano completo.
  - `month: 'long'`: Nome completo do mês (ex.: "dezembro").
  - `day: 'numeric'`: Dia do mês.
- `horaAtual.toLocaleDateString('pt-BR', options)`: Formata a data no estilo brasileiro.
- `horaAtual.toLocaleTimeString()`: Formata a hora no estilo brasileiro (com horas, minutos e segundos).

#### 5. **Atualizando o Conteúdo HTML**
```javascript
dateElement.textContent = `Hoje é ${dataFormatada}.`;
timeElement.textContent = `São: ${horaFormatada}`;
greetingElement.textContent = saudacao;
```
- Altera o texto interno dos elementos selecionados:
  - `dateElement`: Exibe a data formatada.
  - `timeElement`: Exibe a hora formatada.
  - `greetingElement`: Exibe a saudação personalizada.

#### 6. **Tornando o Elemento Visível**
```javascript
dateTimeElement.style.display = 'block';
```
- Garante que o elemento `dateTimeElement` (com classe `datetime`) esteja visível.

---

### **Chamando a Função**
```javascript
updateTime();
```
- A função é chamada para executar todo o processo imediatamente quando o código é carregado.

---

### **Funcionamento no HTML**
Para que esse código funcione, é necessário que os elementos com as classes e IDs mencionados estejam no HTML. Exemplo básico:

```html
<div class="datetime">
    <div id="date"></div>
    <div id="time"></div>
    <div id="greeting"></div>
</div>
```

---

- **Atualizar continuamente a hora**: Use `setInterval` para atualizar o relógio em tempo real.
```javascript
setInterval(updateTime, 1000); // Atualiza a cada 1 segundo
```
