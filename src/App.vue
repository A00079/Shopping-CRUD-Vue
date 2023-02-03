<template>
  <div id="app">
    <nav>
      <Navbar />
    </nav>
    <router-view/>
    <router-link to="/add-products"></router-link>
  </div>
</template>
<script>
import Navbar from '@/components/navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>


<style>
</style>
