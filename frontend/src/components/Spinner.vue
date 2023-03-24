<template>
    <div class="loader">

    </div>
</template>
<style>
.loader {
    width: 50px;
    height: 50px;
    position: relative;
    transform: translateX(3px);
    trnsform: translateY(70px);
   }
   
   .loader::before,
   .loader::after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    mix-blend-mode: multiply;
    animation: rotate9 1s infinite cubic-bezier(0.77, 0, 0.175, 1);
   }
   
   .loader::before {
    background-color: blue;
   }
   
   .loader::after {
    background-color:#4169E1;
    animation-delay: .5s;
   }
   
   @keyframes rotate9 {
    0%,100% {
     left: 50px;
    }
   
    25% {
     transform: scale(.3);
    }
   
    50% {
     left: 0;
    }
   
    75% {
     transform: scale(1);
    }
   }
</style>
<script>
export default{
    
}
</script>