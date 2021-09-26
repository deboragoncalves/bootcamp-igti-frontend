<template>
    <div class="main">
        <p class="title">Nova tarefa</p>
        <form class="form">
            <label for="description">Descrição</label>
            <input v-model="description" class="form-control" id="description" type="text">
            <button class="btn btn-outline-success" @click="saveItem" type="submit">Salvar</button>
        </form>
        <button class="btn btn-outline-success" @click="backTodoList" type="button">Voltar</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            description: ""
        }
    },
    methods: {
        backTodoList() {
            this.$emit("backTodoList");
        },
        saveItem() {
            this.$emit("saveItem", { description: this.description });
        }
    }
}
</script>

<style scoped>
</style>