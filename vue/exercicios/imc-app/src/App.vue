<template>
  <h1 id="title">Cálculo do IMC</h1>
  <form class="form">
    <div class="input">
      <label class="form-label" id="weight">Peso:</label>
      <input class="form-control" type="text" id="weight" tabindex="0" />
    </div>
    <div class="input">
      <label class="form-label" id="height">Altura:</label>
      <input class="form-control" id="height" type="text" tabindex="0" />
    </div>
    <button class="btn btn-outline-secondary" type="button">Calcular</button>
  </form>
</template>

<script>
export default {
  name: "IMC App",
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

</style>
