<template>
  <div>
    <p>
      This TODO is based on vuex.
    </p>
    <ul>
      <li v-for="todo in todos" :key="todo.text">
        <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
      </li>
      <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
    </ul>
    <notifications group="dup-error" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      const val = e.target.value
      if (this.todos.map(e => e.text).indexOf(val) > -1) {
        this.$notify({
          group: 'dup-error',
          title: 'Watch Out!',
          text: 'Todo is already in list!',
          type: 'warn'
        })
      } else {
        this.$store.commit('todos/add', val)
        e.target.value = ''
      }
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>
