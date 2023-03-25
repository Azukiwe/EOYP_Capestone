
<template>
 <!-- Section: Design Block -->
<section class=" text-center text-lg-start">
  <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="https://i.postimg.cc/Sxf0F1S8/2023-03-08-1-removebg-preview.png" alt="Trendy Pants and Shoes"
          class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div class="col-lg-8">
        <div class="card-body py-5 px-md-5">

          <form action="https://formspree.io/f/xvoyqypq" method="post">
            <!-- Email input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1">Full Name</label>
              <input type="text" id="form2Example1" class="form-control" required/>
            </div>

            <!-- Password input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1">Email Address</label>
              <input type="email" id="form2Example2" class="form-control" required />
            </div>
          <!--MESSAGE INPUT-->
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">Message</label>
            <input type="text" id="form2Example1" class="form-control" style="height:5rem;" required/>
            
          </div>
            <!-- 2 column grid layout for inline styling -->
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
               
              </div>
              </div>
               
            <!-- Submit button -->
            <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>

          </form>

        </div>
      </div>
    </div>
  </div>
</section>
<!-- Section: Design Block -->
</template>

<style>
.rounded-t-5 {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

@media (min-width: 992px) {
  .rounded-tr-lg-0 {
    border-top-right-radius: 0;
  }

  .rounded-bl-lg-5 {
    border-bottom-left-radius: 0.5rem;
  }
}
</style>