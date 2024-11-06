# GitHub User Finder

Este é um projeto simples de busca de usuários do GitHub, onde é possível digitar um nome de usuário e ver informações básicas sobre ele, como foto de perfil, nome, biografia, seguidores e repositórios públicos.

## Funcionalidades

- Busca de usuário no GitHub com base no nome de usuário.
- Exibe informações detalhadas do perfil: foto de perfil, nome, biografia, número de seguidores e de repositórios públicos.
- Mensagem de aviso caso o usuário não seja encontrado.
- Interface intuitiva com feedback visual.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **Axios**: Para realizar a chamada à API do GitHub.
- **CSS**: Estilização da interface.
- **GitHub API**: API pública do GitHub para acesso aos dados dos usuários.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o Node.js e o npm instalados na sua máquina.

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- npm (geralmente instalado junto com o Node.js)

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/rafael-freitass/githubsearch.git

2. Acesse o diretório do projeto:
   ```
   cd nome-do-repositorio

3. Instale as dependências:
   ```
   npm install

## Executando o Projeto
Após a instalação, inicie o projeto com o 

    npm start
O projeto estará disponível em http://localhost:3000 no navegador.

## Estrutura de Pastas
```src/components```: Contém os componentes React do projeto (Header, Search, UserCard).
```src/assets```: Imagens e outros recursos visuais usados na interface.
```src/styles```: Estilos CSS organizados por componente.

## Como Usar
- Digite um nome de usuário do GitHub no campo de busca.
- Clique no botão de busca para ver as informações do usuário.
- Caso o usuário não seja encontrado, uma mensagem será exibida.

## Personalização
Para modificar o estilo do projeto, edite os arquivos CSS em ```src/components```.

## Autor
Feito por Rafael Freitas. Sinta-se à vontade para entrar em contato!