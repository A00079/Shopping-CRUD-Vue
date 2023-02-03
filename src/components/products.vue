<template>
  <section class="py-10 bg-gray-100">
  <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <article v-for="(item, index) in productsData" :key="index" class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img :src="item.thumbnail_url" class="w-full h-40" alt="Hotel Photo" />
          <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="ml-1 text-sm text-slate-400">{{item.rating}}</span>
          </div>
        </div>

        <div class="mt-1 p-2">
          <div class="w-full flex flex-row justify-content-between items-center">
            <h2 class="text-slate-700 w-full">{{item.title}}</h2>
            <div class="mr-1 cursor-pointer" @click="editProduct(item.id)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-blue-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </div>
          <div @click="deleteProduct(item.id)">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 cursor-pointer h-4 text-red-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </div>
          </div>
          
          <p class="mt-1 text-sm text-slate-400">{{item.discription}}</p>

          <div class="mt-3 flex items-end justify-between">
            <p>
              <span class="text-lg font-bold text-blue-500">${{item.price}}</span>
            </p>

            <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              <button @click="addToCart(item)" class="text-sm">Add to cart</button>
            </div>
          </div>
        </div>
    </article>
  </div>
</section>
</template>

<script>
export default {
  name: 'Products',
  data(){
    return{
      productsData: []
    }
  },
  created(){
    this.fetchProducts();
  },
  watch:{
    '$store.getters.fetchAllProducts'(){
      this.productsData = this.$store.getters.fetchAllProducts;
    }
  },
  methods:{
    addToCart(data){
      this.$store.dispatch('add_cart_data',data);
    },
    fetchProducts(){
      this.productsData = this.$store.getters.fetchAllProducts;
    },
    deleteProduct(itemId){
      let answer = confirm('Are you sure you want to delete data');
      if (answer) {
        this.$store.dispatch('delete_product',itemId);
      }
    },
    editProduct(itemId){
      this.$store.dispatch('fetch_selected_products',itemId);
      this.$router.push({ name: 'AddProduct' });
    }
  }
}
</script>

<style>

</style>