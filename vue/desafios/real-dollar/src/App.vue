<template>
  <div class="container">
    <p id="title">Conversão Real para Dólar</p>
    <form class="form">
      <div class="input">
        <label for="real">Reais (R$):</label>
        <input id="real" class="form-control" type="text">
      </div>
      <div class="input">
        <label for="dolar">Cotação do dólar ($):</label>
        <input id="dolar" class="form-control" type="text">
      </div>
      <div class="buttons">
        <button class="btn btn-outline-success" type="button">Calcular</button>
        <button class="btn btn-outline-success" type="button">Limpar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Real/Dollar"
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
