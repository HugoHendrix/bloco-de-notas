## **Documentação do Código HTML e JavaScript**

### **Objetivo:**
Este código cria uma interface simples para gerar respostas de segurança personalizadas, dependendo do sistema selecionado (AUTOTRAC, SASCAR, OMNILINK, ONIXSAT). Ele é projetado para ser fácil de usar e entender, especialmente para motoristas de caminhão.

---

## **Estrutura do Código**

### **HTML**

#### **Estrutura Básica:**
```html
 <h3 class="fs-24">Orientações para o motorista responder a Resposta de Segurança</h3>
    <strong>Enviar via WhatsApp</strong>


    <!-- Seleção do Sistema -->
    <label for="system">Selecione a Tecnologia:</label>
    <select id="system" onchange="updateResponse()" class="mb-15">
        <option value="default">Padrão</option>
        <option value="autotrac">AUTOTRAC</option>
        <option value="sascar">SASCAR</option>
        <option value="omnilink">OMNILINK</option>
        <option value="onixsat">ONIXSAT</option>
    </select>

    <!-- Textarea para a Resposta -->
    <textarea id="response" readonly rows="12" cols="18" class="mb-10">
PERGUNTA DE SEGURANÇA:
"A viagem segue normal?"

RESPOSTA DE SEGURANÇA:

Se estiver tudo bem: 4 primeiros dígitos do CPF.


Se estiver em perigo: Responda com qualquer outra informação (ex: 'sim', 'não', 'tudo bem'). Nossos operadores estão preparados para identificar isso como um sinal de perigo e acionar imediatamente o plano de contingência.
    </textarea>
    <button class="btn btn-primary mb-50" onclick="copiarTextoPorId('response')">Copiar orientações</button>
</html>
```

#### **Elementos Principais:**
- **Título da Página:**
  ```html
  <h2>Resposta de Segurança</h2>
  ```

- **Menu Suspenso (Select):**
  Permite ao usuário selecionar o sistema.
  ```html
  <label for="system">Selecione o Sistema:</label>
  <select id="system" onchange="updateResponse()">
      <option value="default">Padrão</option>
      <option value="autotrac">AUTOTRAC</option>
      <option value="sascar">SASCAR</option>
      <option value="omnilink">OMNILINK</option>
      <option value="onixsat">ONIXSAT</option>
  </select>
  ```
  - O atributo `onchange="updateResponse()"` chama a função JavaScript sempre que o valor do menu é alterado.

- **Textarea:**
  Exibe a resposta de segurança. O atributo `readonly` impede que o usuário edite o texto.
  ```html
  <textarea id="response" readonly>
  PERGUNTA DE SEGURANÇA:
  "A viagem segue normal?"

  RESPOSTA DE SEGURANÇA:

  Se estiver tudo bem: 4 primeiros dígitos do CPF.

  Se estiver em perigo: Responda com qualquer outra informação (ex: 'sim', 'não', 'tudo bem'). Nossos operadores estão preparados para identificar isso como um sinal de perigo e acionar imediatamente o plano de contingência.
  </textarea>
  ```

---

### **JavaScript**

#### **Função `updateResponse`:**
Essa função é responsável por atualizar o conteúdo do `<textarea>` conforme o sistema selecionado.

```javascript
function updateResponse() {
    // Obtém o sistema selecionado
    const system = document.getElementById("system").value;

    // Obtém o elemento textarea
    const textarea = document.getElementById("response");

    // Texto base da resposta
    const textoBase = `
PERGUNTA DE SEGURANÇA:
"A viagem segue normal?"

RESPOSTA DE SEGURANÇA:

Se estiver tudo bem: `;

    // Texto para situações de perigo
    const textoPerigo = `
Se estiver em perigo: Responda com qualquer outra informação (ex: 'sim', 'não', 'tudo bem'). Nossos operadores estão preparados para identificar isso como um sinal de perigo e acionar imediatamente o plano de contingência.`;

    // Gera a resposta conforme o sistema selecionado
    let respostaSeguranca = "";
    switch (system) {
        case "autotrac":
            respostaSeguranca = textoBase + "4 primeiros dígitos do CPF (DALASTRA/SATEL)." + textoPerigo;
            break;
        case "sascar":
            respostaSeguranca = textoBase + "Data do dia no formato DDMM (DALASTRA/SATEL)." + textoPerigo;
            break;
        case "omnilink":
            respostaSeguranca = textoBase + "NÃO – NEGATIVO." + textoPerigo;
            break;
        case "onixsat":
            respostaSeguranca = textoBase + "PARADA EM ADUANA." + textoPerigo;
            break;
        default:
            respostaSeguranca = textoBase + "4 primeiros dígitos do CPF." + textoPerigo;
    }

    // Atualiza o conteúdo do textarea
    textarea.value = respostaSeguranca;
}

// Inicializa a resposta ao carregar a página
window.onload = updateResponse;
```

#### **Explicação da Função:**
1. **Obtém o Sistema Selecionado:**
   - `const system = document.getElementById("system").value;`
   - Captura o valor do menu suspenso.

2. **Gera a Resposta:**
   - Usa uma estrutura `switch` para definir a resposta correta conforme o sistema selecionado.

3. **Atualiza o Textarea:**
   - `textarea.value = respostaSeguranca;`
   - Insere a resposta gerada no `<textarea>`.

4. **Inicialização:**
   - `window.onload = updateResponse;`
   - Garante que a função seja executada assim que a página for carregada.

---

### **Como Usar:**

- **Selecione o Sistema:**
   - No menu suspenso, escolha o sistema desejado (AUTOTRAC, SASCAR, OMNILINK, ONIXSAT).

- **Veja a Resposta Atualizada:**
   - O conteúdo do `<textarea>` será atualizado automaticamente com a resposta correta.

---

### **Considerações Finais:**

- **Facilidade de Manutenção:**
  - Para adicionar novos sistemas ou alterar respostas, basta modificar a função `updateResponse`.

- **Portabilidade:**
  - O código é leve e pode ser executado em qualquer navegador moderno.

- **Uso Prático:**
  - Ideal para treinamento de motoristas ou consulta rápida durante viagens.

