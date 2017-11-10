<template>
<!-- <div id="app">
<img src="./assets/logo.png">
<h1>{{ msg }}</h1>
<h2>Essential Links</h2>
<ul>
<li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
<li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
<li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
<li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
</ul>
<h2>Ecosystem</h2>
<ul>
<li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
<li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
<li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
<li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
</ul>
</div> -->

<div id="app" class="col-xs-12 no-padding">
    <div class="container">
        <div class="info col-xs-12 no-padding">
            <div class="fc-branco">Turnos: {{ turns }}</div>
        </div>
        <div class="cards col-xs-12 no-padding">
            <div class="card col-xs-2" v-for="card in cards" :class="{ flipped: card.flipped, found: card.found }" @click="flipCard(card)">
                <div class="back"></div>
                <div class="front" :style="{ backgroundImage: 'url(' + card.image + ')' }"></div>
            </div>
        </div>
        <div class="splash" v-if="showSplash">
            <div class="overlay"></div>
            <div class="content">
                <div class="title fc-branco">Parabéns!<br> você completou o jogo em {{ turns }} turnos!</div>
                <!-- <div class="score fc-branco">Score: {{ score }}</div> -->
                <button class="newGame" @click="resetGame()">Novo Jogo</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>

"use strict";

var CardTypes = [
    { name: "placeholder 1", image: "../src/assets/placeimg_1.jpg" },
    // { name: "placeholder 2", image: "../src/assets/placeimg_2.jpg" },
    // { name: "placeholder 3", image: "../src/assets/placeimg_3.jpg" },
    // { name: "placeholder 4", image: "../src/assets/placeimg_4.jpg" },
    // { name: "placeholder 5", image: "../src/assets/placeimg_5.jpg" },
    // { name: "placeholder 6", image: "../src/assets/placeimg_6.jpg" },
    // { name: "placeholder 7", image: "../src/assets/placeimg_7.jpg" },
    // { name: "placeholder 8", image: "../src/assets/placeimg_8.jpg" },
    // { name: "placeholder 9", image: "../src/assets/placeimg_9.jpg" },
    // { name: "placeholder 10", image: "../src/assets/placeimg_10.jpg" },
    // { name: "placeholder 11", image: "../src/assets/placeimg_11.jpg" },
    // { name: "placeholder 12", image: "../src/assets/placeimg_12.jpg" }
];

var shuffleCards = function shuffleCards() {
    var cards = [].concat(_.cloneDeep(CardTypes), _.cloneDeep(CardTypes));
    return _.shuffle(cards);
};               

export default {
  data () {
    return {
        showSplash: false,
        cards: [],
        started: false,
        startTime: 0,
        turns: 0,
        flipBackTimer: null,
        timer: null,
        time: "--:--",
        score: 0
    }
},

methods: {
    resetGame: function resetGame() {
        this.showSplash = false;
        var cards = shuffleCards();
        this.turns = 0;
        this.score = 0;
        this.started = false;
        this.startTime = 0;

        _.each(cards, function (card) {
            card.flipped = false;
            card.found = false;
        });

        this.cards = cards;
    },
    flippedCards: function flippedCards() {
        return _.filter(this.cards, function (card) {
            return card.flipped;
        });
    },
    sameFlippedCard: function sameFlippedCard() {
        var flippedCards = this.flippedCards();
        if (flippedCards.length == 2) {
            if (flippedCards[0].name == flippedCards[1].name) return true;
        }
    },
    setCardFounds: function setCardFounds() {
        _.each(this.cards, function (card) {
            if (card.flipped) card.found = true;
        });
    },
    checkAllFound: function checkAllFound() {
        var foundCards = _.filter(this.cards, function (card) {
            return card.found;
        });
        if (foundCards.length == this.cards.length) return true;
    },
    startGame: function startGame() {
        var _this = this;

        this.started = true;
        this.startTime = moment();

        this.timer = setInterval(function () {
            _this.time = moment(moment().diff(_this.startTime)).format("mm:ss");
        }, 1000);
    },
    finishGame: function finishGame() {
        this.started = false;
        clearInterval(this.timer);
        var score = 1000 - (moment().diff(this.startTime, 'seconds') - CardTypes.length * 5) * 3 - (this.turns - CardTypes.length) * 5;
        this.score = Math.max(score, 0);
        this.showSplash = true;
    },
    flipCard: function flipCard(card) {
        var _this2 = this;

        if (card.found || card.flipped) return;

        if (!this.started) {
            this.startGame();
        }

        var flipCount = this.flippedCards().length;
        if (flipCount == 0) {
            card.flipped = !card.flipped;
        } else if (flipCount == 1) {
            card.flipped = !card.flipped;
            this.turns += 1;

            if (this.sameFlippedCard()) {
                    // Match!
                    this.flipBackTimer = setTimeout(function () {
                        _this2.clearFlipBackTimer();
                        _this2.setCardFounds();
                        _this2.clearFlips();

                        if (_this2.checkAllFound()) {
                            _this2.finishGame();
                        }
                    }, 200);
                } else {
                    // Wrong match
                    this.flipBackTimer = setTimeout(function () {
                        _this2.clearFlipBackTimer();
                        _this2.clearFlips();
                    }, 1000);
                }
            }
        },
        clearFlips: function clearFlips() {
            _.map(this.cards, function (card) {
                return card.flipped = false;
            });
        },
        clearFlipBackTimer: function clearFlipBackTimer() {
            clearTimeout(this.flipBackTimer);
            this.flipBackTimer = null;
        }
    },

    created: function created() {
        this.resetGame();
    }
}
</script>