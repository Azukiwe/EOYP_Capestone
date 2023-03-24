<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"> <img src="https://i.postimg.cc/kgDk7QZX/2023-03-08-2.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
            CONNECTWITHESKOM</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="text-decoration: none; gap:2rem;">
              <li class="nav-item">
               <router-link to="/">Home</router-link>
              </li>
              <li class="nav-item">
              <router-link to="/about">About Us</router-link>
              </li>
              <li class="nav-item">
              <router-link to="/products">Shop Now</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/Newsfeed">News feed</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/signUp">Sign up</router-link>
              </li>
             
            </ul>
            <ul class="navbar-nav justify-content-center" style="text-decoration: none; gap:2rem;">
              <li class="nav-item">
                <router-link to="/Admin">Admin</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/userProfile">My Account</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login">Login</router-link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
</template>
<style>
#navbarSupportedContent{
    text-decoration: none;
}
nav{
    text-decoration: none;
    padding: 3rem; 
}
.container-fluid{
    text-decoration: none;
   
}
.nav-item{
    text-decoration: none;
    gap:2rem;
}

</style>