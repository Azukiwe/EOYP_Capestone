<template>
  <div class="home">
    <img alt="" src="https://i.postimg.cc/rytMbbvY/eksom-banner-removebg-preview.png">
    <h4><span>CONNECTWITHESKOM</span><br> making life more bearable for communities</h4>
  </div>
  <div class="content" style="display:flex;">
  <div class="card" style="width: 18rem;">
    <img src="https://i.postimg.cc/fymzSVLy/Power-Measurement-Prepaid-Electrical-Sub-Meter-06.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="https://i.postimg.cc/fymzSVLy/Power-Measurement-Prepaid-Electrical-Sub-Meter-06.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  <div class="card" style="width: 18rem;">
    <img src="https://i.postimg.cc/fymzSVLy/Power-Measurement-Prepaid-Electrical-Sub-Meter-06.png" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
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

} 
.home h4{
  position: absolute;
  right: 8rem;
  top:30vh;
  
}
.home img{
  margin-right: 25rem;
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
