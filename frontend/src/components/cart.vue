<template>
    <!-- Button trigger modal -->
<!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
    Launch demo modal
  </button>
  
  Modal
  <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div> -->
  <div class="Modal">
<div class="modal-right">
    <h2>Cart</h2>
    <div class="button"><button class="btn-close" onclick="toggleModal()"></button></div>
    
    
</div>
  </div>
</template>
<style>
.Modal{
    position: sticky;
    top: 0;
    right:0;
    width:100vw;
    height:100vh;
    background-color: rgba(115, 113, 113, 0.427);
    z-index:+1;

}
.modal-right{
    position: absolute;
    top: 0;
    right:0;
    width: 30vw;
    height:100vh;
    background-color: white; 
    display: flex;
    justify-content: space-between;
    padding: 4rem;
}

</style>
<script>
export default{
    computed: {
        showModal(){
            return this.$store.state.showModal;
        }
    },
    methods: {
    toggleModal() {
      this.$store.state.showModal = false;
    }
  }
}
</script>