# memory-card-game

## Desafio: Criar um jogo da memória utilizando VueJS

## 1.1. Purpose ##

O propósito deste desafio é avaliar os conhecimentos em VueJS e seus componentes.

## 1.2. Game ##

O jogo deve começar pedindo o nome do usuário.

Deve conter pelo menos 10 pares de cartas, que devem ser embaralhados e dispostos em forma de grid com o conteúdo de cada uma delas de forma oculta.
A cada rodada, o usuário deverá escolher duas cartas que devem ser reveladas, verificando se elas formam um par. Caso formem, deve manter o par visível.

O sistema deve exibir um contador de rodadas, que começa em zero.

Ao encontrar todos os pares, o sistema deve exibir uma mensagem de sucesso, a quantidade de rodadas da partida, e um botão para reiniciar o jogo.

Outra informação importante é um ranking de quais usuários utilizaram menos rodadas para concluir.



## 1.3 File Structure ##

```
memory-card-game
├── css
│   └── main.css
├── node_module
│   └── ...
├── src
│   ├── assets
|   |   ├── logo.png
│   │   └── ...
|   ├── App.vue
|   ├── GameBoard.vue
│   └── main.js
│
├── index.html
├── package.json
├── webpack.common.js
├── webpack.config.js
└── webpack.config.prod.js
```

## 1.4 Build Setup

``` bash
git clone https://github.com/pmarcosfelipe/memory-card-game.git
cd memory-card-game

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 1.5 References Links

https://vue-loader.vuejs.org/pt_BR/start/setup.html

https://vuejsexamples.com/tag/bootstrap/

https://vuejsexamples.com/memory-card-game-with-vuejs/

https://vuejs.org/v2/api/#data

https://codepen.io/icebob/pen/RRLvAg

https://www.npmjs.com/package/dwy-vue-session

https://www.npmjs.com/package/vue-session