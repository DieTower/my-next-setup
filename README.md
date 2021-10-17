# My NextJS setup

<div style="padding: 10px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #31708f; background-color: #d9edf7; border-color: #bce8f1;">
	🚧 Projeto em produção 🚀 em desenvolvimento... 🚧
</div>

## 📜 Descrição

<p>
    Setup incial para qualquer projeto iniciado com NextJS, com todas
    as ferramentas necessárias para testes, estilização e componentização
</p>

## 💻 Tecnologias utilizadas

![Badge](https://img.shields.io/badge/NextJS-11.0-lightgrey?style=for-the-badge&logo=Next.js)

![Badge](https://img.shields.io/badge/Typescript-4.4.4-%233178C6?style=for-the-badge&logo=TypeScript)

![Badge](https://img.shields.io/badge/Styled%20Components-5.3.1-%23DB7093?style=for-the-badge&logo=styled-components)

![Badge](https://img.shields.io/badge/Chakra%20UI-1.6.10-%23319795?style=for-the-badge&logo=Chakra-UI)

## 📋 Pré-requisitos
<div style="padding: 10px; border: 1px solid transparent; border-color: transparent; margin-bottom: 20px; border-radius: 4px; color: #8a6d3b;; background-color: #fcf8e3; border-color: #faebcc;">
⚠️ Para rodar este setup é necessário ter <a href="https://nodejs.org/">NodeJS</a> instalado.
</div>

    
1. É necessário dar *git clone*:
```bash
# Clonar o repositório
$ git clone https://github.com/DieTower/my-next-setup
```
2. Após entrar através do terminal na pasta clonada devemos descarregar todas as dependencias(a famosa pasta *node_modules*):
```bash
# Descarregar dependencias
$ npm install
```

## ✨ Executar projeto

#### Executar em ambiente de desenvolvimento:
```bash
$ npm run dev
```

#### Executar em ambiente de "produção":
```bash
# Em modo de desenvolvimento devemos utilizar o comando:
$ npm run begin
```

## 🗄️ Estrutura de diretórios

```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┣ 📂molecules
 ┃ ┗ 📂organisms
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜hello.js
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜_app.tsx
 ┣ 📂styles
 ┃ ┣ 📜global.ts
 ┃ ┗ 📜theme.ts
 ┗ 📂templates
```