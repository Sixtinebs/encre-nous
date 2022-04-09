<template>
  <div id="start-register">
    <div class="text">
      <p>Pellentesque ac risus vitae sapien hendrerit </p>
      <p>consequat et vitae diam.</p>
    </div>

    <button
      class="favorite styled"
      type="button"
    >
      Add to favorites
    </button>
    <input type="button" />
    <img
      src="../assets/images/books-start-register.jpg"
      alt=""
    />
  </div>

</template>

<script>
export default {};
</script>

<style>
#start-register {
    height: 700px;
}
img {
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -1;
  height: 700px;
  object-fit: cover;
}
</style>