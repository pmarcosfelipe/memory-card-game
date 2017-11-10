<template>
    <div id="login" class="view col-xs-12 no-padding">
        <img src="./assets/logo.png">
        <h2 class="fc-branco">Por favor, informe seu nome:</h2>
        <br>
        <div class="form-group">
            <input type="text" id="name" name="name" v-model="name" class="form-control">

        </div>
        <div class="form-group">
            <button @click="loginMethod()">Jogar!</button>
        </div>

    </div>
</template>

<script>   

export default {
    name: 'login',

    data () {
        return{
            name: ""
        }
    },

    methods: {
        loginMethod: function () {
            window.location.href = 'game-board'

            // Utilizar localStorage para armazenar dados localmente 

        //     this.$http.post('http://localhost:8080/', { name: this.name })
        //     .then(function (response) {
        //         if (response.status === 200 && 'token' in response.body) {
        //           this.$session.start()
        //           this.$session.set('jwt', response.body.token)
        //           Vue.http.headers.common['Authorization'] = 'Bearer ' + response.body.token
        //           this.$router.push('/game-board')
        //       }
        //   }, function (err) {
        //     console.log('err', err)
        // })
        }
    }
}
</script>