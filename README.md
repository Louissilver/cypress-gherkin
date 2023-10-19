# Cypress Automation Cucumber

1. [Descrição](#descrição)
2. [Autor](#autor)
3. [Licença](#licença)
4. [Instalação](#instalação)
5. [Scripts](#scripts)
   - [Abrir o Cypress no modo Desktop](#abrir-o-cypress-no-modo-desktop)
   - [Abrir o Cypress no modo Mobile](#abrir-o-cypress-no-modo-mobile)
   - [Executar testes no modo Desktop](#executar-testes-no-modo-desktop)
   - [Executar testes no modo Desktop e gerar relatório Testomatio](#executar-testes-no-modo-desktop-e-gerar-relatório-testomatio)
   - [Executar testes no modo Mobile](#executar-testes-no-modo-mobile)
   - [Executar testes no modo Mobile e gerar relatório Testomatio](#executar-testes-no-modo-mobile-e-gerar-relatório-testomatio)
6. [Dependências de Desenvolvimento](#dependências-de-desenvolvimento)
7. [Dependências](#dependências)
8. [Configuração do Cypress-Cucumber-Preprocessor](#configuração-do-cypress-cucumber-preprocessor)

## Descrição

Este é um projeto de automação de testes usando [Cypress](https://www.cypress.io/) e [Cucumber](https://cucumber.io/). Ele é destinado a testes funcionais de aplicações web.

## Autor

Luís Fernando da Silveira

## Licença

Este projeto é licenciado sob a Licença ISC. Consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

## Instalação

Certifique-se de ter [Node.js](https://nodejs.org/) e [npm](https://www.npmjs.com/) instalados em seu sistema. Em seguida, execute o seguinte comando para instalar as dependências:

```bash
npm install
```

## Scripts

### Abrir o Cypress no modo Desktop

```bash
npm run cy:open:desktop
```

### Abrir o Cypress no modo Mobile

```bash
npm run cy:open:mobile
```

### Executar testes no modo Desktop Headless

```bash
npm run cy:run:desktop
```

### Executar testes no modo Desktop e gerar relatório Testomatio

```bash
npm run cy:run:desktop:report
```

### Executar testes no modo Mobile Headless

```bash
npm run cy:run:mobile
```

### Executar testes no modo Mobile e gerar relatório Testomatio

```bash
npm run cy:run:mobile:report
```

## Dependências

- [@babel/traverse](https://www.npmjs.com/package/@babel/traverse) v7.23.2
- [@badeball/cypress-cucumber-preprocessor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor) v18.0.6
- [cypress](https://www.npmjs.com/package/cypress) v13.3.2
- [@bahmutov/cypress-esbuild-preprocessor](https://www.npmjs.com/package/@bahmutov/cypress-esbuild-preprocessor) v2.2.0
- [@cypress/grep](https://www.npmjs.com/package/@cypress/grep) v4.0.1
- [@testomatio/reporter](https://www.npmjs.com/package/@testomatio/reporter) v1.0.15
- [cypress-localstorage-commands](https://www.npmjs.com/package/cypress-localstorage-commands) v2.2.3
- [esbuild](https://www.npmjs.com/package/esbuild) v0.19.5
- [eslint-plugin-cypress](https://www.npmjs.com/package/eslint-plugin-cypress) v2.14.0
- [npm-run-all](https://www.npmjs.com/package/npm-run-all) v4.1.5
- [rimraf](https://www.npmjs.com/package/rimraf) v5.0.1
