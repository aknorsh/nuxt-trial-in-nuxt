<template>
  <div>
    <h1>{{ result }}</h1>
    <p>Now you're on pages/async/index.vue</p>
    <p>(Console would show you how it works.)</p>
    <nuxt-link to="/"> Back to home </nuxt-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      result: ''
    }
  },
  async asyncData () {
    const timeout = (ms) => new Promise(res => setTimeout(res, ms))
    console.log('Start Loading')
    await timeout(1000)
    console.log('1 sec')
    await timeout(1000)
    console.log('2 sec')
    await timeout(1000)
    console.log('End Loading')
    return { result: "Hi! This is async page from 3sec ago!" }
  }
}

</script>
