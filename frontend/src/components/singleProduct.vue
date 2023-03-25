<template>
    <div  class="SingleProduct">
        <cartComponent v-if="ShowModal === true"></cartComponent>
        <div class="row">
            <div class="col" id="image">
                <img  :src="product.imgURL"  alt="" style="width:25rem;">
            </div>
        <div class="col" id="content">
            <h2 style="font-weight: bold;">{{product.prodName}}</h2>
            <h3 style="color:royalblue">{{product.category}}</h3>
            <p>{{product.prodDescription}}</p>
            <button @click.prevent="toggleModal()" v-on:click.prevent="addItemToCart()">Add to cart</button>

        </div>
        </div>
    </div>
</template>
<script>
import cartComponent from "../components/cart.vue";
export default{
    components: {
    cartComponent
  },
  data() {
    return {
      prodID: "",
      userID: "",
    };
  },
    computed: {
        product(){
            return this.$store.state.product
        },
        ShowModal(){
            return this.$store.state.showModal;
        }
    },
    created(){
        this.$store.dispatch('fetchSingleProduct',this.$route.params.id)
    },
    legitUser() {
      return JSON.parse($store.getItem("legitUser"));
    
    },
    methods: {
        addItemToCart() {
    this.$store.dispatch("addItemToCart", {
      userID: this.legitUser?.userID,
      productID: this.product.prodID,
      cartQuantity :  1
    });
  },
  toggleModal() {
      this.$store.state.showModal = true;
    },
    },
}
</script>
<style>

#content{
   margin-top: 5rem;
   font-family: 'Courier New', Courier, monospace;
   margin-right: 5rem;
   margin-bottom: 2rem;
}
</style>