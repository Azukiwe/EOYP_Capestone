<template>
  <div class="home">
    <img alt="" src="https://i.postimg.cc/rytMbbvY/eksom-banner-removebg-preview.png">
    <h4><span>CONNECTWITHESKOM</span><br> making life more bearable for communities.</h4>
  </div>
  <div><h3>For Affordable,rare electronics</h3>
  
  <p>We are passionate about both Solar & electronics. We provide locally & internationally manufactured products.</p></div>
  <div class="content" style="display:flex;">
  <div class="card" style="width: 18rem;">
    <img src="https://i.postimg.cc/Hj18Wt6G/Ellies-Hi-Surge-Secure-Power-Protector-with-Euro-Socket-removebg-preview.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <router-link to="/products">Shop Now</router-link>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="https://i.postimg.cc/BbW7b6km/Recharger-Prepaid-Electricity-Meter-02.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <router-link to="/products">Shop Now</router-link>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="https://i.postimg.cc/VvQv0YGS/single-phase-split-meter-the-meter-Man-09.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <router-link to="/products">Shop Now</router-link>
    </div>
  </div>
</div>
</template>
<style>
.home{
  height: 100vh;
  width: 100vw;
  color:black;
  position: relative;
  height: fit-content;

} 
.home h4{
  position: absolute;
  right: 8rem;
  top:30vh;
  font-family: 'Courier New', Courier, monospace;
  
}
.home img{
  margin-right: 25rem;
}
.home span{
  font-size: 3rem;
  color:blue;
  font-weight: bold;
}
.content {
  gap: 2rem;
  justify-content: center;
 margin-bottom: 2rem;
 margin-top: 5rem;

}
</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
