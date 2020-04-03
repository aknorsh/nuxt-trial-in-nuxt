<template>
  <div>
    <h1>This page is running with Nuxt.js</h1>

    <p>Now you are on /pages/index.vue</p>

    <div v-for="el in links" :key="el.path">
      <nuxt-link :to="el.path">
      Link to {{el.name}}.
      </nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          name: 'About Me page',
          path: '/aboutme'
        },
        {
          name: 'Annoying Middleware page',
          path: '/annoying-middleware'
        },
        {
          name: 'Change Layout page',
          path: '/change-layout'
        },
        {
          name: 'AsyncData page',
          path: '/async'
        },
        {
          name: 'Loaded Picture page',
          path: '/loaded-pic'
        },
        {
          name: 'Static Picture page',
          path: '/static-pic'
        },
        {
          name: 'Vue Notification Plugin page',
          path: '/notify'
        },
        {
          name: 'Injected Plugin page',
          path: '/injected'
        },
        {
          name: 'todo page',
          path: '/todos'
        }
      ]
    }
  }
}
</script>
