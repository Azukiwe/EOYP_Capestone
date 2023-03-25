<template>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Update</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <label class="form-label" for="form1Example13">Name</label>
            <input
              type="text"
              id="form1Example13"
              class="form-control form-control-lg"
              v-model="payload.firstName"
            />
            <label class="form-label" for="form1Example13">Surname</label>
            <input
              type="text"
              id="form1Example13"
              class="form-control form-control-lg"
              v-model="payload.firstName"
            />
            <label class="form-label" for="form1Example13">Email Address</label>
            <input
              type="text"
              id="form1Example13"
              class="form-control form-control-lg"
              v-model="payload.firstName"
            />
            <label class="form-label" for="form1Example13">Gender</label>
            <input
              type="text"
              id="form1Example13"
              class="form-control form-control-lg"
              v-model="payload.firstName"
            />
            <label class="form-label" for="form1Example13">Cell phone Number</label>
            <input
              type="text"
              id="form1Example13"
              class="form-control form-control-lg"
              v-model="payload.firstName"
            />
            <label class="form-label" for="form1Example13">Img Link</label>
            <input
              type="text"
              id="form1Example13"
              class="form-control form-control-lg"
              v-model="payload.firstName"
            />
        </div>
          </div>
          </div>
         
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
</template>
<script>
import {computed} from '@vue/runtime-core';
import {useStore} from 'vuex';
export default{
inheritAttrs:false,
props:['user'],
setup(){
    const payload = {
        userID: '',
        firstName: '',
        lastName: ' ',
        gender:'',
        userPass: '',
        userRole:'user',
        userProfile: '',
    };
    const store = useStore();

    const message = 
    computed( ()=>store.state.message)

    function updateUser(user){
        payload.userID = user.userID;
        if(payload.firstName=='')payload.firstName = user.firstName;
        if(payload.lastName=='')payload.lastName =user.lastName;
        if(payload.gender=='')payload.gender = user.gender;
        if(payload.emailAdd=='')payload.emailAdd = user.emailAdd;
        if(payload.userProfile=='')payload.userProfile = user.userProfile;
        console.log(payload);

        store.dispatch('updateUser', payload);
        store.dispatch('fetchUsers')
    }
    return {
        payload,
        message,
        updateUser
    }
}
}
</script>