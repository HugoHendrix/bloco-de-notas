# Documentação do Script Batch

## Visão Geral
Este script batch automatiza a abertura de diversos aplicativos e altera diretórios de trabalho para garantir que os programas sejam iniciados corretamente.

```batch
@ECHO OFF

REM Alterando o diretório e iniciando o "Trafegus"
CD "C:\Users%username%\Documents\Trafegus"
IF EXIST "trafegus.exe" (
start trafegus.exe
) ELSE (
ECHO "O arquivo trafegus.exe não foi encontrado!"
)

REM Executando "OnixClientV4" do Trucks Control
CD "C:\Program Files (x86)\Trucks Control\New Enterprise"
IF EXIST "OnixClientV4.exe" (
start OnixClientV4.exe
) ELSE (
ECHO "O arquivo OnixClientV4.exe não foi encontrado!"
)

REM Instalando o Software SASGC
CD "C:\Users\Operador\Desktop\Setup_SASGC_4.10.0"
IF EXIST "sasgc-4.10.0.exe" (
start sasgc-4.10.0.exe
) ELSE (
ECHO "O arquivo sasgc-4.10.0.exe não foi encontrado!"
)

REM Executando "EZModRas" do SAVER2000
CD "C:\SAVER2000\MR"
IF EXIST "EZModRas.exe" (
start EZModRas.exe
) ELSE (
ECHO "O arquivo EZModRas.exe não foi encontrado!"
)

REM Executando "MicroSIP"
CD "C:\Users\Operador\AppData\Local\MicroSIP"
IF EXIST "microsip.exe" (
start microsip.exe
) ELSE (
ECHO "O arquivo microsip.exe não foi encontrado!"
)

REM Abrindo Aplicativos Gerais
IF EXIST "C:\Program Files\Google\Chrome\Application\chrome.exe" (
start CHROME.EXE
) ELSE (
ECHO "Google Chrome não encontrado!"
)

IF EXIST "C:\Program Files\Microsoft Office\root\Office16\OUTLOOK.EXE" (
start OUTLOOK.EXE
) ELSE (
ECHO "Microsoft Outlook não encontrado!"
)

```

## Explicação Linha por Linha

### 1. Supressão da Exibição de Comandos
```batch
@ECHO OFF
```
Este comando impede que cada linha do script seja exibida na tela, tornando a execução mais limpa e focada nos resultados.

### 2. Alterando o Diretório e Iniciando o "Trafegus"
```batch
CD "C:\Users%username%\Documents\Trafegus"
start trafegus.exe
```
- `CD` altera o diretório de trabalho para "Trafegus" na pasta "Documents" do usuário logado.
- `start` executa o arquivo "trafegus.exe".

### 3. Tentativa Repetida de Execução do "Trafegus"
```batch
CD "C:\Users%username%\Documents\Trafegus"
start trafegus.exe
```
Esse trecho é redundante, pois o programa "trafegus.exe" já foi iniciado anteriormente.

### 4. Executando "OnixClientV4" do Trucks Control
```batch
CD "C:\Program Files (x86)\Trucks Control\New Enterprise"
start OnixClientV4.exe
```
- Muda para o diretório onde "OnixClientV4.exe" está localizado.
- Executa "OnixClientV4.exe".

### 5. Instalando o Software SASGC
```batch
CD "C:\Users\Operador\Desktop\Setup_SASGC_4.10.0"
start sasgc-4.10.0.exe
```
- Muda para o diretório onde o instalador "sasgc-4.10.0.exe" está localizado.
- Executa o instalador "sasgc-4.10.0.exe".

### 6. Executando "EZModRas" do SAVER2000
```batch
CD "C:\SAVER2000\MR"
start EZModRas.exe
```
- Muda para o diretório "C:\SAVER2000\MR".
- Executa "EZModRas.exe".

### 7. Executando "MicroSIP"
```batch
CD "C:\Users\Operador\AppData\Local\MicroSIP"
start microsip.exe
```
- Muda para a pasta onde "microsip.exe" está localizado.
- Executa "microsip.exe".

### 8. Abrindo Aplicativos Gerais
```batch
start CHROME.EXE
start OUTLOOK.EXE
```
- `start CHROME.EXE` abre o navegador Google Chrome.
- `start OUTLOOK.EXE` abre o Microsoft Outlook.

## Melhorias Sugeridas
- **Remover repetições** (exemplo: segunda execução de "trafegus.exe").
- **Verificar se os arquivos existem antes de executá-los**, evitando erros se algum programa não estiver instalado.
- **Inserir mensagens informativas** para facilitar o entendimento do progresso da execução do script.

Exemplo de verificação antes de executar um programa:
```batch
IF EXIST "C:\Users%username%\Documents\Trafegus\trafegus.exe" (
    start trafegus.exe
) ELSE (
    ECHO "O arquivo trafegus.exe não foi encontrado!"
)
```




