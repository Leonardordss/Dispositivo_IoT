# Dashboard de Sensores IIoT com React e Contentful

Esta aplicação web exibe dados de sensores (Temperatura do Motor, Temperatura da Bomba, Consumo Energético) lidos de um backend configurado no Contentful. A aplicação é construída com React, TypeScript e Vite, utilizando o SDK do Contentful para buscar os dados.

## Pré-requisitos

Antes de executar o projeto, certifique-se de que você tem o Node.js e o pnpm (ou npm/yarn) instalados na sua máquina.

## Configuração

1.  **Clone o repositório (se aplicável) ou tenha os arquivos do projeto.**

2.  **Crie um arquivo de ambiente:**
    Na raiz do projeto (`sensor_dashboard_app`), crie um arquivo chamado `.env` e adicione as seguintes variáveis com as suas credenciais do Contentful:

    ```env
    VITE_CONTENTFUL_SPACE_ID="SEU_SPACE_ID_AQUI"
    VITE_CONTENTFUL_ACCESS_TOKEN="SEU_DELIVERY_API_TOKEN_AQUI"
    ```

    Substitua `SEU_SPACE_ID_AQUI` pelo ID do seu Espaço no Contentful e `SEU_DELIVERY_API_TOKEN_AQUI` pelo seu Token de Acesso da API de Entrega de Conteúdo.

3.  **Instale as dependências:**
    Navegue até o diretório raiz do projeto no seu terminal e execute o comando para instalar as dependências necessárias:

    ```bash
    pnpm install
    ```
    Ou, se estiver usando npm:
    ```bash
    npm install
    ```
    Ou, se estiver usando yarn:
    ```bash
    yarn install
    ```

## Executando a Aplicação

Após a configuração e instalação das dependências, você pode iniciar o servidor de desenvolvimento local:

```bash
pnpm run dev
```
Ou, se estiver usando npm:
```bash
npm run dev
```
Ou, se estiver usando yarn:
```bash
yarn dev
```

Isso iniciará a aplicação em modo de desenvolvimento. Abra o seu navegador e acesse o endereço fornecido no terminal (geralmente `http://localhost:5173/`).

A aplicação buscará os dados do seu Content Model `device` (conforme configurado no `contentfulService.ts`) e os exibirá em uma tabela.

## Estrutura do Projeto (Principais Arquivos)

-   `public/`: Contém arquivos estáticos.
-   `src/`: Contém o código-fonte da aplicação.
    -   `App.tsx`: Componente principal da aplicação que busca e exibe os dados.
    -   `services/contentfulService.ts`: Contém a lógica para se conectar e buscar dados do Contentful.
    -   `vite-env.d.ts`: Definições de tipo para as variáveis de ambiente do Vite.
    -   `main.tsx`: Ponto de entrada da aplicação React.
-   `.env`: Arquivo para variáveis de ambiente (NÃO DEVE SER VERSIONADO COM CREDENCIAIS REAIS EM REPOSITÓRIOS PÚBLICOS).
-   `package.json`: Define as dependências e scripts do projeto.
-   `README.md`: Este arquivo.

## Observações

-   O Content Model no Contentful deve ter o ID `device` para que a busca funcione como configurada. Se o ID for diferente, ajuste a propriedade `content_type` na função `fetchSensorReadings` dentro de `src/services/contentfulService.ts`.
-   Os campos esperados no Content Model são: `identificadorDoSensor` (Texto), `timestampDaLeitura` (Data e Hora), `temperaturaDoMotor` (Número Decimal), `temperaturaDaBomba` (Número Decimal), e `consumoEnergetico` (Número Decimal). Se os IDs dos campos forem diferentes, ajuste a interface `LeituraSensorFields` em `src/services/contentfulService.ts` e as referências no `App.tsx`.

