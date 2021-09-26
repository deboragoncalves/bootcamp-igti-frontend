<template>
  <div id="main">
    <todo-list @editItem="editItem" @deleteItem="deleteItem" :todoList="todoList" v-if="!saveItem"></todo-list>
    <button class="btn btn-outline-success button-new-item" type="button" v-if="!saveItem" @click="createNewItem">Nova tarefa</button>
    <new-item :itemList="itemList" @saveItem="saveNewItem" @backTodoList="backMainPage" v-if="saveItem"></new-item>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import NewItem from './components/NewItem.vue';

export default {
  data() {
    return {
      saveItem: false,
      todoList: [],
      itemList: null,
      id: 1
    }
  },
  components: { 
    TodoList,
    NewItem 
  }, 
  methods: {
    createNewItem() {
      // Limpar
      this.itemList = null;
      this.saveItem = true;
    },
    backMainPage() {
      this.saveItem = false;
    },
    saveNewItem(item) {
      if (item.id) {

        // Verificar se id existe (put)
        let index = item.findIndex(i => i.id === item.id);
        item = this.itemList[index];
      } else {
        // Ao criar, criar chave id com spread
        this.item = { id: this.id, ...this.item}
        this.todoList.push(item);

        this.id++;
      }

      localStorage.setItem("todoList", JSON.stringify(this.todoList));
      this.saveItem = false;
    },
    deleteItem(index) {

      // Splice: index, qtde itens
      this.todoList.splice(index, 1);

      localStorage.setItem("todoList", JSON.stringify(this.todoList));
    },
    editItem(index) {
      // Setar a variável itemList (controle para edição)

      this.itemList = this.todoList[index];

      // Edição
      this.saveItem = true;
    }
  },
  created() {
    // Atualizar lista - localStorage

    let todoList = localStorage.getItem("todoList");

    if (todoList) {

      // Object

      this.todoList = JSON.parse(todoList);
    }
  }
}

// TODO: Corrigir bug put
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}

.button-new-item {
  margin: 10px 20px;
}
</style>
