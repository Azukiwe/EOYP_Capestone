<template>
    <section class="vh-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 text-black">
      
              <div class="px-5 ms-xl-4">
                <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
                <img src="https://i.postimg.cc/PJvQSrXF/lightning-icon-removebg-preview.png" alt="" srcset="" style="height: 5rem;">
                <span class="h1 fw-bold mb-0">Logo</span>
              </div>
      
              <div class="d-flex align-items-right h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5" >
      
                <form style="width: 23rem;" @submit.prevent="login">
      
                  <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Log in</h3>
      
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example18">Email address</label>
                    <input type="email" id="form2Example18" class="form-control form-control-lg" v-model="payload.emailAdd" placeholder="eg.johndoe@gmail.com" />
                  </div>
      
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example28">Password</label>
                    <input type="password" id="form2Example28" class="form-control form-control-lg" v-model="payload.userPass"/>
                     </div>
                     <div class="pt-1 mb-4">
                    <button class="btn btn-info btn-lg btn-block" type="submit">Login</button>
                  </div>
                  <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account? <a href="#!" class="link-info">Register here</a></p>
                 
                </form>
      
              </div>
      
            </div>
            <div class="col-sm-6 px-0 d-none d-sm-block">
              <img src="https://i.postimg.cc/xjLX02bG/2023-03-08-8-removebg-preview.png"
                alt="Login image" class="w-80 vh-100" style="object-fit: cover; object-position: left;">
            </div>
          </div>
        </div>
      </section>
    
</template>
<script>
export default{
  name:"logIn",
  data(){
    return {
      payload: {
      emailAdd: '',
      userPass: ''
    },
  };
},
 computed: {
  legitUser(){
    return this.$store.state.legitUser
  },
  message(){
    return this.$store.state.message
  }
 
 },
 methods: {
    login(){
      this.$store.dispatch('logIn', this.payload)
    }
  }
}
</script>