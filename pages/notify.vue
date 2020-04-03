<template>
  <div>

    <h1>Vue-Notification</h1>
    <p>You are on /pages/notify.vue</p>
    <div>
      <button @click="notify">
        click to Notify
      </button>
    </div>
    <nuxt-link to="/"> Back to home </nuxt-link>

    <notifications group="greet" />
    
  </div>
</template>

<script>
export default {
  methods: {
    notify () {
      this.$notify({
        group: 'greet',
        title: 'Notification',
        text: 'Hello from vue-notification!'
      })
    }
  },
  plugins: {
  }
}

</script>
