<template>
  <div class="home">
    <Home />
    <Products />
    <pageFooter />
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/homesection.vue'
import Products from '@/components/products.vue'
import pageFooter from '@/components/footer.vue'
import Cart from '@/components/cart.vue'

export default {
  name: 'HomeView',
  components: {
    Home,
    Products,
    pageFooter,
    Cart
  },
  created(){
    this.$store.dispatch('fetch_all_products');
  }
}
</script>
