<template>
    <div class="main">
        <p class="title">Nova tarefa</p>
        <form class="form">
            <label for="description">Descrição:</label>
            <input tabindex="0" v-model="description" class="form-control" id="description" type="text">
        </form>
        <div class="buttons">
            <button class="btn btn-outline-success" @click="saveItem" type="button">Salvar</button>
            <button class="btn btn-outline-success" @click="backTodoList" type="button">Voltar</button>
        </div>        
    </div>
</template>

<script>
export default {
    props: {
        itemList: Object
    },
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
    },
    created() {
        if (this.itemList) {

            // Se existir, setar
            this.description = this.itemList.description;
        }
    }
}
</script>

<style scoped>

    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        text-align: center;
        font-size: 20px;
        margin: 20px;
    }

    .form input {
        width: 120%;
    }

    .form label {
        padding: 10px 0;
    }

    .buttons {
        display: flex;
    }

    .buttons button {
        margin: 20px 10px;
    }
</style>