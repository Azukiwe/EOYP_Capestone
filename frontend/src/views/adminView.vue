<template>
  <!--PRODUCT TABLE-->
  <div>
    <button></button>
  </div>
    <div class="Products">
      <h3>Products Table</h3>
  <table class="table">

    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Product</th>
        <th scope="col">Product_Name</th>
        <th scope="col">Category</th>
        <th scope="col">Description</th>
        <th scope="col">Price</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody v-for="product in products" :key="product.prodID">
      <tr>
        <th scope="row">{{ product.prodID }}</th>
        <td> <img :src="product.imgURL" alt="" srcset="" style="height:3rem;width:3rem"></td>
        <td>{{ product.prodName }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.prodDescription }}</td>
        <td>{{ product.price }}</td>
        <td><button onclick="" ></button>Edit</td>
        <td><button class="btn-close" v-on:click="$event => deleteProduct(product.prodID)"></button></td>
      </tr>
    </tbody>
  </table>
</div>
  <br />
  <br />
  <!--  USERS TABLE-->
  <h3>Users Table</h3>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Profile</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Cellphone No.</th>
        <th scope="col">Email Address</th>
        <th scope="col">Role</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody v-for="user in users" :key="user.userID">
      <tr>
        <th scope="row">{{ user.userID }}</th>
        <td><img :src="user.userProfile" alt="" srcset="" style="height:3rem;width:3rem;"></td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.cellphoneNo }}</td>
        <td>{{ user.emailAdd }}</td>
        <td>{{ user.userRole }}</td>
        <td><button type="button" class="btn-close" onclick=""></button></td>
        <td><button @click="deleteUser(user.userID)">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>
<style>
</style>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    store.dispatch("fetchUsers");
    const products = computed(() => store.state.products);
    const users = computed(() => store.state.users);
    return {
      products,
      users
    };
  },
  data() {
    return {
      payload: {
        firstName: "",
        lastName: "",
        userPass: "",
        gender: "",
        cellphoneNo: "",
        emailAdd: "",
        userProfile: "",
      },
    };
  },
  computed: {
    addProduct() {
      return this.$store.state.addProduct;
    },
  },

 
methods: {
  deleteProduct(id){
    this.$store.dispatch("deleteProduct",id);
    console.log("Product deleted");
  },
  deleteUser(id){
    this.$store.dispatch("deleteUser",id);
    this.$store.dispatch('fetchUsers');
    
  },
  methods: {
    signUp() {
      console.log(this.payload);
      this.$store.dispatch("addProduct", this.payload);
    },
  },
}
}
</script>
<style>
thead{
  color:royalblue;
  font-size: 1,5rem;
}
</style>
