<template>
  <div class="container">
    <p id="title">Conversão Real para Dólar</p>
    <form class="form">
      <div class="input">
        <label for="real">Reais (R$):</label>
        <input id="real" :disabled="realToDollar != 0" v-model="real" class="form-control" type="number">
      </div>
      <div class="input">
        <label for="dolar">Cotação do dólar ($):</label>
        <input id="dolar" :disabled="realToDollar != 0" v-model="dollar" class="form-control" type="number">
      </div>
      <div class="buttons">
        <button class="btn btn-outline-success" v-on:click="convertRealToDollar" type="button">Calcular</button>
        <button class="btn btn-outline-success" v-on:click="clearInputs" type="button">Limpar</button>
      </div>
    </form>
    <p v-if="realToDollar != 0" class="result">Com R$ {{ real }} reais, você pode comprar $ {{realToDollar}} dólares.</p>
  </div>
</template>

<script>
export default {
  name: "Real/Dollar",
  data() {
    return {
      real: '',
      dollar: '',
      realToDollar: 0
    }
  },
  methods: {
    convertRealToDollar() {
      this.realToDollar = this.real / this.dollar;
      this.realToDollar = this.realToDollar.toFixed(2);
    },
    clearInputs() {
      this.real = '';
      this.dollar = '';
      this.realToDollar = 0;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#title {
  font-size: 25px;
  font-weight: bold;
  margin: 15px;
}

.form {
  width: 35%;
  margin: 20px 0;
}

.input, .buttons {
  display: flex;
}

.input {
  margin: 15px;
}

.input label {
  width: 300px;
}

.buttons button {
  margin: 10px;
}

</style>
