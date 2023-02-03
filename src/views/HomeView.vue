<template>
  <div class="home">
    <Navbar />
    <Home />
    <Products />
    <pageFooter />
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Home from '@/components/homesection.vue'
import Products from '@/components/products.vue'
import pageFooter from '@/components/footer.vue'
import Cart from '@/components/cart.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Home,
    Products,
    pageFooter,
    Cart
  },
}
</script>
