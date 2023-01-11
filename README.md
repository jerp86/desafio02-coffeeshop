# Desafio 02 - Coffee Delivery

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

---

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#art-layout-no-figma">Figma</a>&nbsp;|&nbsp;
  <a href="#rainbow-documenta%C3%A7%C3%A3o-de-cores">Cores</a>&nbsp;|&nbsp;
</h3>
<h3 align="center">
  <a href="#writing_hand-tamanhos-de-fonte">Tamanhos</a>&nbsp;|&nbsp;
  <a href="#abc-fontes-utilizadas">Fontes</a>&nbsp;|&nbsp;
  <a href="#zap-como-executar">Executar</a>&nbsp;|&nbsp;
  <a href="#memo-licen%C3%A7a">Licença</a>
</h3>

---

## :information_source: Sobre

Esse desafio do #Ignite da [Rocketseat](@rocketseat-education), foi ainda mais fundo em funcionalidades do React, e dessa vez adicionando também mais regras para praticar ainda mais o uso do ReactJS.

Foi desenvolvido uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia, que contém as seguintes funcionalidades:
- Listagem de produtos (cafés) disponíveis para compra
- Adicionar uma quantidade específicas de itens no carrinho
- Aumentar ou remover a quantidade de itens no carrinho
- Formulário para o usuário preencher o seu endereço
- Exibir o total de itens no carrinho no Header
- Exibir o valor total da soma de itens no carrinho multiplicados pelo valor

Apesar de serem poucas funcionalidades, foi preciso relembrar conceitos como:

- Estados
- ContextAPI
- LocalStorage
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização

Para completar esse desafio, foram utilizados métodos de manipulação de arrays como o `reduce`, que foi extremamente útil para o cálculo do valor total do carrinho.

## :interrobang: Motivo

Reinicio dos estudos do bootcamp Ignite ReactJS da Rocketseat.

Como se tratou de um desafio, foi necessário alguns conhecimentos além dos abordados nesse módulo.

## :rocket: Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [ESLint](https://eslint.org/)
- [Immer](https://github.com/immerjs/immer#readme)
- [Phosphor](https://phosphoricons.com/)
- [Polished](https://polished.js.org/)
- [React-Router-Dom](https://github.com/remix-run/react-router#readme)
- [React-Hook-Form](https://www.react-hook-form.com/)
- [Styled-Components](https://styled-components.com/) 💅🏽
- [Zod](https://github.com/colinhacks/zod)

## :art: Layout no Figma

Após logar em sua conta, você deve duplicar o Layout do desafio. Para isso, basta você clicar no link abaixo. Ele adicionará o Layout à sua dashboard do Figma automaticamente, como uma cópia e abrirá o layout da aplicação para a sua visualização.

[Coffee-Delivery](https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/duplicate)

## :rainbow: Documentação de cores

| Cor           | Hexadecimal                                                      |
| ------------- | ---------------------------------------------------------------- |
| white        | ![#8047F8](https://via.placeholder.com/10/8047F8?text=+) #8047F8 |
| background   | ![#FAFAFA](https://via.placeholder.com/10/FAFAFA?text=+) #FAFAFA |
| base-card      | ![#F3F2F2](https://via.placeholder.com/10/F3F2F2?text=+) #F3F2F2 |
| base-input    | ![#EDEDED](https://via.placeholder.com/10/EDEDED?text=+) #EDEDED |
| base-button    | ![#E6E5E5](https://via.placeholder.com/10/E6E5E5?text=+) #E6E5E5 |
| base-hover    | ![#D7D5D5](https://via.placeholder.com/10/D7D5D5?text=+) #D7D5D5 |
| base-label    | ![#8D8686](https://via.placeholder.com/10/8D8686?text=+) #8D8686 |
| base-text    | ![#574F4D](https://via.placeholder.com/10/574F4D?text=+) #574F4D |
| base-subtitle    | ![#403937](https://via.placeholder.com/10/403937?text=+) #403937 |
| base-title    | ![#272221](https://via.placeholder.com/10/272221?text=+) #272221 |
| base-error      | ![#f84747](https://via.placeholder.com/10/f84747?text=+) #f84747 |
| purple-dark | ![#4B2995](https://via.placeholder.com/10/4B2995?text=+) #4B2995 |
| purple       | ![#8047F8](https://via.placeholder.com/10/8047F8?text=+) #8047F8 |
| purple-light       | ![#EBE5F9](https://via.placeholder.com/10/EBE5F9?text=+) #EBE5F9 |
| yellow-dark       | ![#C47F17](https://via.placeholder.com/10/C47F17?text=+) #C47F17 |
| yellow       | ![#DBAC2C](https://via.placeholder.com/10/DBAC2C?text=+) #DBAC2C |
| yellow-light       | ![#F1E9C9](https://via.placeholder.com/10/F1E9C9?text=+) #F1E9C9 |

## :writing_hand: Tamanhos de fonte

| Nome           | Tamanho em pixel                                                      |
| ------------- | ---------------------------------------------------------------- |
| title-xl  | 48 px |
| title-l | 32 px |
| title-m | 24 px |
| title-s | 20 px |
| title-xs  | 18 px |
| text-xl2  | 24 px |
| text-xl | 20 px |
| text-l  | 18 px |
| text-m  | 16 px |
| text-s  | 14 px |
| text-xs | 12 px |
| text-xs2  | 10 px |

## :abc: Fontes utilizadas

- [Roboto](https://fonts.google.com/specimen/Roboto)
- [Baloo 2](https://fonts.google.com/specimen/Baloo+2)

## :zap: Como executar

Clone o projeto:

```
git clone https://github.com/jerp86/desafio02-coffeeshop.git
```

Acesse a pasta clonada:

```
cd desafio02-coffeeshop
```

Instale as dependências

```
npm ci
```

Rode o projeto:

```
npm run dev
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<h4 align="center">
  Feito por Jerp86 👋️
</h4>
<h5 align="center">
  <a href="mailto:jerp.dev@gmail.com">Entre em contato!</a>
</h5>

<p align="center">
  <a href="https://www.linkedin.com/in/jerp/">
    <img alt="Perfil do Linkedin de José Eduardo Rodrigues Pinto" src="https://img.shields.io/badge/LinkedIn-jerp-0e76a8?style=flat&logoColor=white&logo=linkedin">
  </a>
  <a href="https://twitter.com/jerpbtu">
    <img alt="Perfil do Twitter de José Eduardo Rodrigues Pinto" src="https://img.shields.io/twitter/follow/jerpbtu?style=flat&logoColor=white&logo=Twitter">
  </a>
</p>
