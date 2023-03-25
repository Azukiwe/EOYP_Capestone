import { createStore } from "vuex";
import { useCookies } from "vue3-cookies";
import axios from "axios";
const connect = "https://connectwitheskom2.onrender.com/";
// const connect = "http://localhost:2000";
const { cookies } = useCookies();

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    showSpinner: true,
    legitUser: null,
    message: null,
    cart: null,
    showModal: false,
    productTotal: null,
   },
  getters: {
   Quantity: state => product => {
    const item = state.cart.find(item.id === product.id)
    if(item) return item.quantity
    else return null
   }
  },

  mutations: {
    setUsers(state, values) {
      state.users = values;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, values) {
      state.products = values;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setLegitUser(state, value) {
      state.legitUser = value;
    },
    setMessage(state, value) {
      state.message = value;
    },
    setCart(state,cart){
      state.cart = cart;
    },
    sort:(state)=>{
      state.products.sort((a,b)=>{
        return a.price - b.price;
      });
      if(state.asc){
        state.products.reverse();
    }
    state.asc = !state.asc;
  },
  },
  actions: {
    async fetchUsers(context) {
      const res = await axios.get(`${connect}users`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setUsers", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchProducts(context) {
      const res = await axios.get(`${connect}products`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setProducts", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async fetchSingleProduct(context, id) {
      const res = await axios.get(`${connect}product/${id}`);
      const result = await res.data.result[0];
      console.log(result);

      if (result) {
        context.commit("setProduct", result);
      } else {
        context.commit("setMessage", err);
      }
    },
    async registerUser(context, payload) {
      console.log(payload);
      const res = await axios.post(`${connect}register`, payload);
      // console.log(payload);
      // console.log(res);
      const { msg, err } = await res.data;
      if (msg) {
        console.log("Registration message: ", msg);
        // context.commit("setUser", results);
        context.commit("setMessage", msg);
        context.dispatch("fetchUsers");
        // console.log(results)
      } else {
        context.commit("setMessage", err);
      }
    },
    async logIn(context, payload) {
      console.log("start");
      const res = await axios.post(`${connect}login`, payload);
      console.log("Response: ", res);
      const { result, jwToken, msg, err } = await res.data;
      console.log("mid");
      if (result) {
        context.commit("setLegitUser", result);
        console.log(result);
        context.commit("setMessage", msg);
        cookies.set("ValidClient", jwToken);
      } else {
        context.commit("setMessage", err);
      }
    },
    async updateUser(context, payload){
      const res = await axios.put(`${connect}user/${payload.userID}`,payload);
      const {msg,err} = await res.data;
      console.log("msg - update",msg);
      if(msg){
        context.commit("setMessage",msg);
      }else{
        context.commit("setMessage", err);
      }
    },
    async updateProduct(context, payload){
      const res = await axios.put(`${connect}user/${payload.prodID}`,payload);
      const {msg,err,results} = await res.data;
      if(msg){
        context.commit("setMessage",results);
      }else{
        context.commit("setMessage", err);
      }
    },
    fetchCart: async (context,id) => {
      const res = await axios.get(`${connect}user/${id}/carts`);
      
      const { result, err } = await res.data;
      
      if (result) {
        
        context.commit("setCart", result);
      } else {
        context.commit("setCart", err);
      }
    },
    async fetchAdmin(context) {
      const res = await axios.get(`${connect}/admin`);
      const { results, err } = await res.data;
      if (results) {
        context.commit("setAdmin", results);
      } else {
        context.commit("setMessage", err);
      }
    },
    async deleteUser(context, id) {
      const res = await axios.delete(`${connect}/user/${id}`);
      const { result, err } = await res.data;
      if (result) {
        context.commit("setUsers", result);
        console.log(msg);
      } else {
        context.commit("setMessage", err);
        console.log(err);
      }
    },
    addItemToCart: async (context,payload) => {
      console.log(payload);
      const res = await axios.post(`${connect}user/${payload.userID}/cart`, payload);
      const { msg, err } = await res.data;

      if (msg) {
        console.log(msg);
        context.commit("setMessage", msg);
        context.dispatch('fetchCart', this.state.legitUser.userID)
      } else {
        context.commit("setMessage", err);
        console.log(err);
      }
    },
    async AddProduct(context, payload) {
      console.log(payload);
      const res = await axios.post(`${connect}addProduct`, payload);
      // console.log(payload);
      // console.log(res);
      const { msg, err } = await res.data;
      if (msg) {
        console.log("Product added message: ", msg);
        // context.commit("setUser", results);
        context.commit("setMessage", msg);
        context.dispatch("fetchProducts");
        // console.log(results)
      } else {
        context.commit("setMessage", err);
      }
    },

  },
  modules: {},
});
