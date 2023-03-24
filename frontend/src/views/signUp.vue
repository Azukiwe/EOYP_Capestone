<template>
  <div>
    <h2>Sign Up</h2>
  </div>
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid"
          alt="Phone image"
        />
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form @submit.prevent="signUp">
          <!--Title-->
          <h2>Sign Up:</h2>
          <!--FirstName input-->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example13">First Name</label>
            <input
              type="text"
              id="form1Example13"
              class="form-control form-control-lg"
              v-model="payload.firstName"
            />
          </div>
          <!--LastName input-->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example13">Surname</label>
            <input
              type="text"
              id="form1Example14"
              class="form-control form-control-lg"
              v-model="payload.lastName"
            />
          </div>
          <!-- Email input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example13">Email address</label>
            <input
              type="email"
              id="form1Example15"
              class="form-control form-control-lg"
              v-model="payload.emailAdd"
            />
          </div>
          <!--Gender input-->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example13">Gender</label>
            <input
              type="text"
              id="form1Example16"
              class="form-control form-control-lg"
              v-model="payload.gender"
            />
          </div>
          <!--Cell no input-->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example13">Phone Number</label>
            <input
              type="number"
              id="form1Example17"
              class="form-control form-control-lg"
              v-model="payload.cellphoneNo"
            />
          </div>
          <!-- Password input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example23">Password</label>
            <input
              type="password"
              id="form1Example23"
              class="form-control form-control-lg"
              v-model="payload.userPass"
            />
          </div>
          <!--IMG input-->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example13">IMG Link</label>
            <input
              type="text"
              id="form1Example18"
              class="form-control form-control-lg"
              v-model="payload.userProfile"
            />
          </div>
          <!-- <div class="d-flex justify-content-around align-items-center mb-4">
             Checkbox 
            <a href="#!">Forgot password?</a>
          </div> -->

          <!-- Submit button -->
          <button type="submit" class="btn btn-primary btn-lg btn-block">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import {computed} from '@vue/runtime-core';
// import {useStore} from 'vuex';
export default {
  //   setUp(){
  //     const payload = {
  //       firstName: '',
  //       lastName:'',
  //       gender:'',
  //       emailAdd: '',
  //       userPass: '',
  //       userProfile: ''
  //     };
  //     const store = useStore();
  //     const registerUser =
  //     computed( ()=>store.state.message)
  //     return {
  //       payload,
  //       registerUser
  //     }
  //   }
  //   // methods: {
  //   //   signUp() {
  //   //     this.$store.dispatch('registerUser ',this.payload)
  //   // }
  // }
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
    registerUser() {
      return this.$store.state.registerUser;
    },
  },

  methods: {
    signUp() {
      //  this.payload = {
      //   firstName: this.firstName,
      //   lastName: this.lastName,
      //   emailAddress: this.emailAdd,
      //   gender: this.gender,
      //   phone: this.cellphoneNo,
      //   password: this.userPass,
      //   imgURL: this.imgURL
      //  }
      console.log(this.payload);
      this.$store.dispatch("registerUser", this.payload);
      //  console.log(this.$store.state.user);
      //  console.log(this.Message);
    },
  },
};
</script>

<style>
#form1Example17[type="number"]::-webkit-inner-spin-button,
#form1Example17[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
