<template>
    <div class="my_account" v-if="legitUser">
        <div class="delete">
          <div class="deleteModal">
            <h4>Are you sure you want to delete your account?</h4>
            <div class="del_buttons">
              <button @click="hideDelete()">Cancel</button>
              <button @click="deleteUser()">Delete</button>
            </div>
          </div>
        </div>
    </div>
        <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  <img :src="legitUser.userProfile" alt=""
                    class="rounded-circle img-fluid" style="width: 150px;">
                  <h5 class="my-3">{{legitUser.firstName}} {{legitUser.lastName}}</h5>
                  <p class="text-muted mb-1">{{legit}}</p>
                  <p class="text-muted mb-4">{{legitUser.userRole}}</p>
                  <div class="d-flex justify-content-center mb-2">
                    <button type="button" class="btn btn-primary">Follow</button>
                    <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="card mb-4">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Name</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{legitUser.firstName}}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Surname</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{legitUser.lastName}}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Email</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{legitUser.emailAdd}}</p>
                    </div>
                  </div>
                  <hr>  
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Mobile</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">(+27){{legitUser.cellphoneNo}}</p>
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <p class="mb-0">Gender</p>
                    </div>
                    <div class="col-sm-9">
                      <p class="text-muted mb-0">{{legitUser.gender}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>



        <div class="edit">
          <div class="editModal">
            <form @submit.prevent="update()">
              <div class="initials">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingText"
                    placeholder="name@example.com"
                    required
                    v-model="this.updatingUser.firstName"
                  />
                  <label for="floatingText">First name</label>
                </div>
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    id="floatingText"
                    placeholder="name@example.com"
                    required
                    v-model="this.updatingUser.lastName"
                  />
                  <label for="floatingText">Surname</label>
                </div>
              </div>
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                  v-model="this.updatingUser.emailAdd"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="number"
                  required
                  v-model="this.updatingUser.cellphoneNo"
                />
                <label for="floatingText">Phone number</label>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Male"
                  required
                  v-model="updatingUser.gender"
                />
                <label for="floatingPassword">Gender</label>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingText"
                  placeholder="url"
                  required
                  v-model="updatingUser.userProfile"
                />
                <label for="floatingText">Image URL</label>
              </div>
              <div class="form-buttons">
                <button @click="hideEdit()">Cancel</button>
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
    
            <div class="buttons">
              <button class="btn-edit" @click="showEdit()">
                <i class="fa-solid fa-pen-to-square" ></i> Edit account
              </button>
              <button class="btn-delete" @click="showDelete()">
                <i class="fa-solid fa-trash" ></i> Delete
                account
              </button>
            </div>
          </div>
        
    </template>
    <script>
    export default {
      name: "myAccount",
      computed: {
        legitUser() {
          return this.$store.state.legitUser;
        },
      },
      data() {
        return {
          updatingUser: {
            firstName: this.$store.state.legitUser?.firstName,
            Surname: this.$store.state.legitUser?.lastName,
            emailaddress: this.$store.state.legitUser?.emailAdd,
            phone: this.$store.state.legitUser?.cellphoneNo,
            gender: this.$store.state.legitUser?.gender,
            userProfile: this.$store.state.legitUser?.userProfile
          }
        };
      },
      methods: {
        showDelete() {
          document.querySelector(".delete").id = "showModal";
        },
        hideDelete() {
          document.querySelector(".delete").id = "hideModal";
        },
        update() {
          this.$store.dispatch('updateUser', this.legitUser.userID, this.updatingUser);
          this.hideEdit();
        },
        deleteUser() {
          this.$store.dispatch('deleteUser', this.legitUser?.userID);
          hide.hideDelete();
        },
        showEdit() {
          document.querySelector(".edit").id = "showModal";
          console.log(this.updatingUser)
        },
        hideEdit() {
          document.querySelector(".edit").id = "hideModal";
        }
      },
    }
    </script>
    <style>
.delete{
display: none;
}
.edit{
  display:none;
}
</style>
