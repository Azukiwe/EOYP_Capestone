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
    showModal: false
   },
  getters: {
    // products(state){
    //   return state.products
    // },
    // product(state){
    //   return state.product
    // },
    // users(state){
    //   return state.users
    // },
    // user(state){
    //   return state.user
    // },
    // legitUser(state){
    //   return state.legitUser
    // }
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
      // async handleSubmit(){
      //   const res = await axios.post('login',{
      //     email: this.email,
      //     password: this.password
      //   });
      //   localStorage.setItem('token', res.data.token);
      // }
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
      const { msg, err } = await res.data;
      if (msg) {
        context.commit("deleteUser", msg[0]);
        console.log(msg);
      } else {
        context.commit("setMessage", err);
        console.log(err);
      }
    },
  },
  modules: {},
});
