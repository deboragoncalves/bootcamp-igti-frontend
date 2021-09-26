<template>
  <div id="main">
    <todo-list v-if="!createItem"></todo-list>
    <button class="btn btn-outline-success" type="button" v-if="!createItem" @click="createNewItem">Nova tarefa</button>
    <new-item v-if="createItem"></new-item>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';
import NewItem from './components/NewItem.vue';

export default {
  name: 'TODO List',
  data() {
    return {
      createItem: false
    }
  },
  components: { 
    TodoList,
    NewItem 
  }, 
  methods: {
    createNewItem() {
      this.createItem = !this.createItem;
    }
  }
}
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
