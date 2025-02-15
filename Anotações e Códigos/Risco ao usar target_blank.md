O uso do atributo target="_blank" pode introduzir riscos de segurança, especialmente devido a vulnerabilidades conhecidas como tabnabbing. Isso ocorre quando o site que você abriu em uma nova guia obtém acesso à window.opener da guia original e pode redirecioná-la para outro endereço malicioso.

Para tornar o link mais seguro, siga estas práticas:

Use o atributo rel="noopener noreferrer"
Adicione o atributo rel="noopener noreferrer" ao link para evitar que a página aberta obtenha acesso ao objeto window.opener.

Exemplo:

```html
Copiar
Editar
<a href="https://www.example.com/manual.pdf" target="_blank" rel="noopener noreferrer">
    Clique aqui para acessar o manual
</a>
```
- noopener: Garante que o objeto window.opener não será exposto.
- noreferrer: Além de impedir o acesso ao window.opener, ele também remove informações de referência (como o URL de origem).
