<template>
    <header class="bg-none home-bg text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap py-1 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-red p-2 bg-white rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl text-white">ShopperStop</span>
            </a>
            <nav class="md:ml-auto text-white flex flex-wrap items-center text-base justify-center">
            <router-link :to="'/'">
            <a class="mr-5 hover:text-yellow-500 cursor-pointer text-xs">Home</a>
            </router-link>
            <a class="mr-5 hover:text-yellow-500 cursor-pointer text-xs">About Us</a>
            <a @click="goTo" class="mr-5 hover:text-yellow-500 cursor-pointer border-white border bg-white text-black text-xs rounded py-1 px-4">Add Product</a>
            <div class="relative" @click="showCart">
                <a class="absolute top-4 hover:text-yellow-500 cursor-pointer bg-white text-xs text-black rounded px-1">{{ this.$store.getters.fetchCartData.length }}</a>
                <a class="mr-5 hover:text-yellow-500 cursor-pointer font-medium text-lg rounded py-1 px-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                </a>
            </div>
            </nav>
        </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
    methods:{
        goTo(){
            this.$router.push({ name: 'AddProduct' });
            this.$store.commit("FETCH_SELECTED_PRODUCTS", []);
        },
        showCart(){
            this.$store.dispatch("cart_visibility", true);
            console.log('store',this.$store.getters.cartVisiblity);
        }
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  