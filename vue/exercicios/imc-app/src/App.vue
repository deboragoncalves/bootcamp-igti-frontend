<template>
  <h1 id="title">Cálculo do IMC</h1>
  <form class="form">
    <div class="input">
      <label class="form-label" for="weight">Peso:</label>
      <input class="form-control" type="text" v-model="weight" id="weight" tabindex="0" />
    </div>
    <div class="input">
      <label class="form-label" for="height">Altura:</label>
      <input class="form-control" id="height" v-model="height" type="text" tabindex="0" />
    </div>
    <div class="buttons">
      <button class="btn btn-outline-primary" @click="calcIMC" type="button">Calcular</button>
      <button class="btn btn-outline-primary" @click="clear" type="button">Limpar</button>
    </div>
  </form>
  <p class="imc">IMC: {{ imc }}</p>
  <p class="classification">Classificação: {{ classification }}</p>
</template>

<script>
export default {
  name: "IMC App",
  data() {
    return {
      weight: '',
      height: '',
      imc: 0,
      classification: ''
    }
  },
  methods: {
    calcIMC() {
      this.imc = this.weight / Math.pow(this.height, 2);
      this.imc = this.imc.toFixed(2);

      this.showClassification();
    },
    showClassification() {
      if (this.imc < 18.5) {
        this.classification = "Abaixo do peso normal";
      } else if (this.imc >= 18.5 && this.imc <= 24.9) {
        this.classification = "Peso normal";
      } else if (this.imc >= 25.0 && this.imc <= 29.9) {
        this.classification = "Excesso de peso";
      } else if (this.imc >= 30.0 && this.imc <= 34.9) {
        this.classification = "Obesidade I";
      } else if (this.imc >= 35.0 && this.imc <= 39.9) {
        this.classification = "Obesidade II";
      } else {
        this.classification = "Obesidade III";
      }
    },
    clear() {
      this.height = '';
      this.weight = '';
      this.imc = 0;
      this.classification = '';
    }
  }
};
</script>

<style>

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

#title {
  font-size: 25px;
  margin: 20px;
  font-weight: bold;
}

.form {
  width: 30%;
  margin: 10px;
}

.input {
  display: flex;
}

.input label {
  margin: 10px;
}

.input input {
  margin: 10px;
}

button {
  margin: 10px;
  display: flex;
}

.imc, .classification {
  margin: 15px;
  font-size: 20px;
}

.imc {
  font-weight: bold;
}

.buttons {
  display: flex;
}

</style>
