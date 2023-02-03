import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flagCartVisiblity : false,
    allProducts:[],
    selectedProduct:{},
    cartData:[]
  },
  getters: {
    cartVisiblity(state){
      return state.flagCartVisiblity
    },
    fetchAllProducts(state){
      return state.allProducts
    },
    fetchSelectedProduct(state){
      return state.selectedProduct;
    },
    fetchCartData(state){
      return state.cartData;
    }
  },
  mutations: {
    CART_VISIBILITY(state,payload){
      state.flagCartVisiblity = payload
    },
    FETCH_ALL_PRODUCTS(state,payload){
      state.allProducts = payload
    },
    ADD_PRODUCT_DATA(state,payload){
      state.allProducts = payload
    },
    ADD_CART_DATA(state,payload){
      state.cartData.push(payload)
    },
    REMOVE_FROM_CART(state,payload){
      state.cartData = payload
    },
    DELETE_PRODUCT(state,payload){
      state.allProducts = payload
    },
    FETCH_SELECTED_PRODUCTS(state,payload){
      state.selectedProduct = payload
    },
    EDIT_PRODUCT(state,payload){
      state.allProducts = payload
    },
  },
  actions: {
    cart_visibility({commit},payload) {
      commit('CART_VISIBILITY',payload)
    },
    fetch_all_products({commit}) {
      axios.get('http://localhost:3000/products')
      .then(response => {
        commit('FETCH_ALL_PRODUCTS',response.data)
      })
      .catch(error => {
        console.error(error);
      });
    },
    add_product_data({commit},payload) {
      axios.post('http://localhost:3000/products', payload)
        .then(response => {
          commit('ADD_PRODUCT_DATA',response.data)
        })
        .catch(error => {
          console.error(error);
        });
    },
    add_cart_data({commit},payload) {
      commit('ADD_CART_DATA',payload)
    },
    remove_from_cart({commit},payload) {
      let filterData = this.getters.fetchCartData.filter((el,index)=>{
        return el.id !== payload
      })
      commit('REMOVE_FROM_CART',filterData)
    },
    delete_product({commit},payload) {
      axios.delete(`http://localhost:3000/products/${payload}`)
        .then(response => {
          // commit('DELETE_PRODUCT',response.data)
          this.dispatch('fetch_all_products')
        })
        .catch(error => {
          console.error(error);
        });
    },
    edit_product({commit},payload) {
      axios.put(`http://localhost:3000/products/${payload.id}`,payload)
        .then(response => {
          // commit('EDIT_PRODUCT',response.data)
          this.dispatch('fetch_all_products')
        })
        .catch(error => {
          console.error(error);
        });
    },
    fetch_selected_products({commit},payload) {
      axios.get(`http://localhost:3000/products/${payload}`)
      .then(response => {
        commit('FETCH_SELECTED_PRODUCTS',response.data)
        console.log('single response data------>>',response.data);
      })
      .catch(error => {
        console.error(error);
      });
    },
  },
  modules: {
  }
})
