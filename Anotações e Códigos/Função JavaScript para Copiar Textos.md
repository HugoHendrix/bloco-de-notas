
### Função: `copiarTextoPorId(idElemento)`

**Descrição:**  
Esta função copia o conteúdo de um elemento HTML (como um `<textarea>`) para a área de transferência do usuário. O elemento é identificado pelo seu `id`. Se o elemento não for encontrado, uma mensagem de erro será exibida no console.

---

**Parâmetros:**  
- `idElemento` (String): O `id` do elemento HTML que contém o texto a ser copiado. Por exemplo, `"ocorrencia1"`.

---

**Retorno:**  
- A função não retorna nenhum valor explicitamente. Ela copia o texto do elemento para a área de transferência do usuário.

---

**Exceções:**  
- Se o elemento com o `id` especificado não for encontrado, a função exibirá uma mensagem de erro no console:  
  `Elemento com ID '${idElemento}' não encontrado.`

---

**Exemplo de Uso:**  
A função pode ser usada em conjunto com um botão para copiar o conteúdo de um `<textarea>` ou qualquer outro elemento de texto. Por exemplo:

```html
<textarea id="ocorrencia1">
Identificamos que o veículo apresenta um defeito no atuador de bloqueio...
</textarea>
<button class="btn btn-primary" onclick="copiarTextoPorId('ocorrencia1')">Copiar</button>
```

Quando o botão "Copiar" for clicado, o texto dentro do `<textarea>` com o `id="ocorrencia1"` será copiado para a área de transferência.

---

**Notas:**  
1. A função utiliza o método `document.execCommand("copy")`, que é uma abordagem tradicional para copiar texto. No entanto, esse método está obsoleto em navegadores modernos. Para uma solução mais atual, considere usar a API `Clipboard` (navigator.clipboard.writeText).
2. Certifique-se de que o elemento referenciado pelo `id` seja um elemento de texto (como `<textarea>` ou `<input type="text">`) para garantir que o método `select()` funcione corretamente.

---

### Exemplo de Código Completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Copiar Texto</title>
</head>
<body>
    <textarea id="ocorrencia1">
        Identificamos que o veículo apresenta um defeito no atuador de bloqueio...
    </textarea>
    <button class="btn btn-primary" onclick="copiarTextoPorId('ocorrencia1')">Copiar</button>

    <script>
        function copiarTextoPorId(idElemento) {
            const elemento = document.getElementById(idElemento);
            if (elemento) {
                elemento.select();
                document.execCommand("copy");
            } else {
                console.error(`Elemento com ID '${idElemento}' não encontrado.`);
            }
        }
    </script>
</body>
</html>
```

---

### Alternativa Moderna (API Clipboard)

Se você quiser usar uma abordagem mais moderna e recomendada, pode substituir a função `copiarTextoPorId` por esta versão, que utiliza a API `Clipboard`:

```javascript
function copiarTextoPorId(idElemento) {
    const elemento = document.getElementById(idElemento);
    if (elemento) {
        navigator.clipboard.writeText(elemento.value)
            .then(() => console.log("Texto copiado com sucesso!"))
            .catch((err) => console.error("Erro ao copiar texto:", err));
    } else {
        console.error(`Elemento com ID '${idElemento}' não encontrado.`);
    }
}
```

**Vantagens:**  
- Mais confiável e compatível com navegadores modernos.
- Não depende de métodos obsoletos como `document.execCommand`.

