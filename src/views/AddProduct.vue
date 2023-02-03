<template>
  <div>
    <!-- component -->
    <div class="bg-white dark:bg-gray-900">
      <div class="flex justify-center h-screen">
        <div
          class="hidden bg-cover lg:block lg:w-1/2"
          style="
            background-image: url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
          "
        >
          <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 class="text-4xl font-bold text-white">
                {{
                  Object.keys(this.$store.getters.fetchSelectedProduct).length >
                  0
                    ? "Update"
                    : "Add"
                }}
                Products
              </h2>

              <p class="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div
          class="flex items-start w-full mt-10 max-w-md px-6 mx-auto lg:w-2/6"
        >
          <div class="flex-1">
            <div class="text-center">
              <h2
                class="
                  text-4xl
                  font-bold
                  text-center text-gray-700
                  dark:text-white
                "
              >
                {{
                  Object.keys(this.$store.getters.fetchSelectedProduct).length >
                  0
                    ? "Update"
                    : "Add"
                }}
                New Products
              </h2>

              <p class="mt-3 text-gray-500 dark:text-gray-300">
                Once added the product will be shown on live web page.
              </p>
            </div>

            <div class="mt-8">
              <div class="w-full flex flex-row justify-content-between">
                <div class="mr-4">
                  <label
                    for="title"
                    class="
                      block
                      mb-2
                      text-sm
                      font-bold
                      text-gray-600
                      dark:text-gray-200
                    "
                    >Title</label
                  >
                  <input
                    v-model="title"
                    type="title"
                    name="title"
                    id="title"
                    placeholder="Nike Air Jordan"
                    class="
                      block
                      w-full
                      px-4
                      py-2
                      mt-2
                      text-gray-700
                      placeholder-gray-400
                      bg-white
                      border border-gray-200
                      rounded-md
                      dark:placeholder-gray-600
                      dark:bg-gray-900
                      dark:text-gray-300
                      dark:border-gray-700
                      focus:border-blue-400
                      dark:focus:border-blue-400
                      focus:ring-blue-400
                      focus:outline-none
                      focus:ring
                      focus:ring-opacity-40
                    "
                  />
                </div>
                <div>
                  <label
                    for="price"
                    class="
                      block
                      mb-2
                      text-sm
                      font-bold
                      text-gray-600
                      dark:text-gray-200
                    "
                    >Price</label
                  >
                  <input
                    v-model="price"
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Nike Air Jordan"
                    class="
                      block
                      w-full
                      px-4
                      py-2
                      mt-2
                      text-gray-700
                      placeholder-gray-400
                      bg-white
                      border border-gray-200
                      rounded-md
                      dark:placeholder-gray-600
                      dark:bg-gray-900
                      dark:text-gray-300
                      dark:border-gray-700
                      focus:border-blue-400
                      dark:focus:border-blue-400
                      focus:ring-blue-400
                      focus:outline-none
                      focus:ring
                      focus:ring-opacity-40
                    "
                  />
                </div>
              </div>
              <div class="w-full mt-4 flex flex-row justify-content-between">
                <div class="mr-4">
                  <label
                    for="quantity"
                    class="
                      block
                      mb-2
                      text-sm
                      font-bold
                      text-gray-600
                      dark:text-gray-200
                    "
                    >Quantity</label
                  >
                  <input
                    v-model="quantity"
                    type="number"
                    name="quantity"
                    id="quantity"
                    placeholder="Nike Air Jordan"
                    class="
                      block
                      w-full
                      px-4
                      py-2
                      mt-2
                      text-gray-700
                      placeholder-gray-400
                      bg-white
                      border border-gray-200
                      rounded-md
                      dark:placeholder-gray-600
                      dark:bg-gray-900
                      dark:text-gray-300
                      dark:border-gray-700
                      focus:border-blue-400
                      dark:focus:border-blue-400
                      focus:ring-blue-400
                      focus:outline-none
                      focus:ring
                      focus:ring-opacity-40
                    "
                  />
                </div>
                <div>
                  <label
                    for="rating"
                    class="
                      block
                      mb-2
                      text-sm
                      font-bold
                      text-gray-600
                      dark:text-gray-200
                    "
                    >Rating</label
                  >
                  <input
                    v-model="rating"
                    type="number"
                    name="rating"
                    id="rating"
                    placeholder="Nike Air Jordan"
                    class="
                      block
                      w-full
                      px-4
                      py-2
                      mt-2
                      text-gray-700
                      placeholder-gray-400
                      bg-white
                      border border-gray-200
                      rounded-md
                      dark:placeholder-gray-600
                      dark:bg-gray-900
                      dark:text-gray-300
                      dark:border-gray-700
                      focus:border-blue-400
                      dark:focus:border-blue-400
                      focus:ring-blue-400
                      focus:outline-none
                      focus:ring
                      focus:ring-opacity-40
                    "
                  />
                </div>
              </div>
              <div class="mt-4">
                <label
                  for="proImage"
                  class="
                    block
                    mb-2
                    text-sm
                    font-bold
                    text-gray-600
                    dark:text-gray-200
                  "
                  >Image</label
                >
                <input
                  v-model="image"
                  type="text"
                  name="proImage"
                  id="proImage"
                  placeholder="Nike Air Jordan"
                  class="
                    block
                    w-full
                    px-4
                    py-2
                    mt-2
                    text-gray-700
                    placeholder-gray-400
                    bg-white
                    border border-gray-200
                    rounded-md
                    dark:placeholder-gray-600
                    dark:bg-gray-900
                    dark:text-gray-300
                    dark:border-gray-700
                    focus:border-blue-400
                    dark:focus:border-blue-400
                    focus:ring-blue-400
                    focus:outline-none
                    focus:ring
                    focus:ring-opacity-40
                  "
                />
              </div>
              <div class="mt-4">
                <label
                  for="discription"
                  class="
                    block
                    mb-2
                    text-sm
                    font-bold
                    text-gray-600
                    dark:text-gray-200
                  "
                  >Discription</label
                >
                <input
                  v-model="discription"
                  type="text"
                  name="discription"
                  id="discription"
                  placeholder="Nike Air Jordan"
                  class="
                    block
                    w-full
                    px-4
                    py-2
                    mt-2
                    text-gray-700
                    placeholder-gray-400
                    bg-white
                    border border-gray-200
                    rounded-md
                    dark:placeholder-gray-600
                    dark:bg-gray-900
                    dark:text-gray-300
                    dark:border-gray-700
                    focus:border-blue-400
                    dark:focus:border-blue-400
                    focus:ring-blue-400
                    focus:outline-none
                    focus:ring
                    focus:ring-opacity-40
                  "
                />
              </div>
              <div class="mt-6">
                <button
                  @click="addProduct"
                  class="
                    w-full
                    px-4
                    py-2
                    tracking-wide
                    text-white
                    transition-colors
                    duration-200
                    transform
                    bg-blue-500
                    rounded-md
                    hover:bg-blue-400
                    focus:outline-none
                    focus:bg-blue-400
                    focus:ring
                    focus:ring-blue-300
                    focus:ring-opacity-50
                  "
                >
                  {{
                    Object.keys(this.$store.getters.fetchSelectedProduct)
                      .length > 0
                      ? "Update"
                      : "Add"
                  }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      id:'',
      title: "",
      price: "",
      image: "",
      quantity: "",
      rating: "",
      discription: "",
      copyData: {}
    };
  },
  watch:{
    '$store.getters.fetchSelectedProduct'(data){
        this.copyData = data;
        this.setModifyData();
    }
  },
  created() {
    this.setModifyData();
  },
  methods: {
    setModifyData(){
        if (Object.keys(this.copyData).length > 0) {
            this.id = this.copyData.id;
            this.title = this.copyData.title;
            this.price = this.copyData.price;
            this.image = this.copyData.thumbnail_url;
            this.quantity = this.copyData.quantity;
            this.rating = this.copyData.rating;
            this.discription = this.copyData.discription;
        }
    },
    addProduct() {
      let obj = {
        id:  this.id,
        title: this.title,
        price: this.price,
        quantity: this.quantity,
        rating: this.rating,
        thumbnail_url: this.image,
        discription: this.discription,
      };
      if (Object.keys(this.copyData).length > 0) {
        this.$store.dispatch("edit_product", obj);
        this.$router.push({ name: 'home' });
      }else{
        this.$store.dispatch("add_product_data", obj);
        this.$router.push({ name: 'home' });
      }
    },
  },
};
</script>

<style>
</style>