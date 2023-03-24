<template>
    <div class="SingleProduct">
        <div class="row">
            <div class="col">
                <img  :src="product.imgURL"  alt="" >
            </div>
        <div class="col">
            <h2>{{product.prodName}}</h2>
            <h3>{{product.category}}</h3>
            <p>{{product.prodDescription}}</p>
            <button>Add to cart</button>

        </div>
        </div>
    </div>
</template>
<script>
export default{
    computed: {
        product(){
            return this.$store.state.product
        }
    },
    created(){
        this.$store.dispatch('fetchSingleProduct',this.$route.params.id)
    }
}
</script>
<style>
.col img{
    
}
</style>