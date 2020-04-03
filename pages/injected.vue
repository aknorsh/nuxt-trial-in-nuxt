<template>
  <div>

    <h1>Injection Sample</h1>
    <p>You are on /pages/injected.vue</p>
    <input type="text" v-model="str">
    <div>
      <button @click="triggerInj">
        click to Triger
      </button>
    </div>
    <nuxt-link to="/"> Back to home </nuxt-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      str: ''
    }
  },
  methods: {
    triggerInj () {
      this.$injectedFunction(this.str)
    }
  }
}
</script>
