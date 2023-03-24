<template>
  <div class="container" v-if="products == undefined">
    <SpinnerComponent />
    
  </div>
  <div v-else class="content">
    <cartComponent v-if="ShowModal === true"></cartComponent>
    <div class="row">
      <div
        class="col-6 col-sm-4"
        v-for="product in products"
        :key="product.prodID"
      > 



        <div class="cards" style="width: 18rem;" >
          <div class="image"
           :style="{ backgroundImage: `url(${product.imgURL})`}"></div>
          <div class="card-structure">
            <h5>{{ product.prodName }}</h5>
            <h5>{{ product.category }}</h5>
            <h5>{{ product.price }}</h5>
            <router-link class="more"
              :to="{ name: 'singleProduct', params: { id: product.prodID } }"
              >view more</router-link
            > <br>
             <button @click.prevent="toggleModal()">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
import SpinnerComponent from "../components/Spinner.vue";
import cartComponent from "../components/cart.vue";
export default {
  components: {
    SpinnerComponent,
    cartComponent
  },
  computed: {
        ShowModal(){
            return this.$store.state.showModal;
        }
    },
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    const products = computed(() => store.state.products);
    const spinner = computed(() => store.state.showSpinner);
    const cart = computed(() => store.state.cart);
    return {
      products,
      spinner,
      cart

    };
  },
  methods: {
    toggleModal() {
      this.$store.state.showModal = true;
    }
  }
  // methods:{
  //   log() {
  //     console.log(this.products);
  //   }
  // }
};
</script>
<style scoped>
.container{
  width:100vw;
  height:100vh;
  display: grid;
  place-items: center;
}
.image{
  background-size: cover;
  background-position: center;
  width: 10rem;
  height:10rem;
 
}
.cards{
 border: 2px solid grey;
 width: 10rem;
 height: 25rem;
 margin-top: 2rem;
 margin-bottom: 2rem;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
font-family: 'Courier New', Courier, monospace;
}
.more{
  text-decoration: none;
  border:2px solid black;
 color: black;
 
}


</style>
